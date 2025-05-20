// File: src/repositories/UserRepository.ts
// Description: This file implements the IUserRepository interface, providing methods to interact with the User entity in the database.
// It uses TypeORM to perform CRUD operations on the User entity.

import { User } from "../entities/User";
import { Repository } from "typeorm";
import { IUserRepository } from "./IUserRepository";
import { AppDataSource } from "../config/DataSource";

export class UserRepository implements IUserRepository {
    private repo: Repository<User>;

    constructor() {
        this.repo = AppDataSource.getRepository(User);
    }

    async save(user: User): Promise<User> {
        return await this.repo.save(user);
    }

    async findAll(): Promise<User[]> {
        return await this.repo.find();
    }

    async findById(id: number): Promise<User | null> {
        return await this.repo.findOneBy({ id });
    }

    async findByEmail(email: string): Promise<User | null> {
        return await this.repo.findOneBy({ email });
    }
}
