// File: src/dtos/User.ts
// Description: This file defines the data transfer objects (DTOs) for user-related operations.
// It includes the CreateUserInput type for creating a new user and the UserOutput type for returning user data.
// It also includes the UserListOutput type for returning a list of users.
// The DTOs are used to decouple the data structure from the entities, allowing for better separation of concerns and easier testing.

export type CreateUserInput = {
    name: string;
    email: string;
};

export type UserOutput = {
    id: number;
    name: string;
    email: string;
}

export type UserListOutput = {
    users: UserOutput[];
}