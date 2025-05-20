// File: src/entities/User.ts
// Description: This file defines the User entity, which represents a user in the database.
// It uses TypeORM to map the entity to a SQLite database table.
// It includes properties for the user's ID, name, and email address.

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}
