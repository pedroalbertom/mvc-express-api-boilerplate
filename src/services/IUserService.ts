// File: src/services/IUserService.ts
// Description: This file defines the IUserService interface, which outlines the methods for user-related operations.
// It includes methods for creating a user, getting all users, getting a user by ID, and getting a user by email.
// This interface is implemented by the UserService class, which contains the business logic for user operations.
// It is used to decouple the service layer from the controller layer, allowing for better separation of concerns and easier testing.

import { CreateUserInput, UserListOutput, UserOutput } from "../dtos/User";

export interface IUserService {
    createUser(data: CreateUserInput): Promise<UserOutput>;
    getAllUsers(): Promise<UserListOutput>;
    getUserById(id: number): Promise<UserOutput | null>;
    getUserByEmail(email: string): Promise<UserOutput | null>;
}
