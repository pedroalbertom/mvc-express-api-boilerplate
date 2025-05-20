export type CreateUserInput = {
    name: string;
    email: string;
};

export type UpdateUserInput = {
    name?: string;
    email?: string;
};

export type UserOutput = {
    id: number;
    name: string;
    email: string;
}

export type UserListOutput = {
    users: UserOutput[];
}