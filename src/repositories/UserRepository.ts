import { Repository } from "typeorm";
import { AppDataSource } from "../config/DataSource";
import { User } from "../entities/User";

export class UserRepository {
    private repo: Repository<User>;

    constructor() {
        this.repo = AppDataSource.getRepository(User);
    }

    async save(user: User): Promise<User> {
        return await this.repo.save(user);
    }

    async update(user: User): Promise<User> {
        const existing = await this.repo.findOneBy({ id: user.id });
        if (!existing) throw new Error("User not found");
        return await this.repo.save(user);
    }

    async delete(id: number): Promise<void> {
        await this.repo.delete(id);
    }

    async findAll(): Promise<User[]> {
        return await this.repo.find();
    }

    async findById(id: number): Promise<User | null> {
        return await this.repo.findOneBy({ id }) || null;
    }

    async findByEmail(email: string): Promise<User | null> {
        return await this.repo.findOneBy({ email }) || null;
    }
}
