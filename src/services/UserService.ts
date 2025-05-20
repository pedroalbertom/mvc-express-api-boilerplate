// File: src/services/UserService.ts
// Description: This file contains the implementation of the UserService class, which handles user-related business logic.
// It interacts with the IUserRepository interface to perform CRUD operations on user data.
// It includes methods for creating a user, getting all users, getting a user by ID, and getting a user by email.

import { IUserService } from "./IUserService";
import { User } from "../entities/User";
import { IUserRepository } from "../repositories/IUserRepository";
import { isValidEmail } from "../shared/utils/Email";
import { CreateUserInput, UserListOutput, UserOutput } from "../dtos/User";

export class UserService implements IUserService {
    constructor(private userRepository: IUserRepository) { }

    async createUser(data: CreateUserInput): Promise<UserOutput> {
        if (!data.name || !data.email) throw new Error("Name and email are required");
        if (!isValidEmail(data.email)) throw new Error("Invalid email format");

        const existingUser = await this.userRepository.findByEmail(data.email);
        if (existingUser) throw new Error("Email already in use");

        const user = new User(data.name, data.email);
        return this.userRepository.save(user);
    }

    async getAllUsers(): Promise<UserListOutput> {
        const users = await this.userRepository.findAll();

        const userList: UserOutput[] = users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
        }));

        return { users: userList };
    }

    async getUserById(id: number): Promise<UserOutput | null> {
        if (!Number.isInteger(id) || id <= 0) throw new Error("Invalid user ID");
        return this.userRepository.findById(id);
    }

    async getUserByEmail(email: string): Promise<UserOutput | null> {
        if (!email) throw new Error("Email is required");
        if (!isValidEmail(email)) throw new Error("Invalid email format");

        return this.userRepository.findByEmail(email);
    }
}
