// File: src/repositories/IUserRepository.ts
// Description: This file defines the IUserRepository interface, which outlines the methods for user data access.
// It includes methods for saving a user, finding all users, finding a user by ID, and finding a user by email.
// This interface is implemented by the UserRepository class, which contains the data access logic for user operations.
// It is used to decouple the repository layer from the service layer, allowing for better separation of concerns and easier testing.

import { User } from "../entities/User";

export interface IUserRepository {
    save(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
}
