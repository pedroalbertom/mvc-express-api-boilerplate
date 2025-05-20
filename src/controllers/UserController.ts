// File: src/controllers/UserController.ts
// Description: This file defines the UserController class, which handles HTTP requests related to user operations.

import { Request, Response } from "express";
import { IUserService } from "../services/IUserService";

export class UserController {
    constructor(private userService: IUserService) { }

    async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email } = req.body;
            const data = { name, email };
            const user = await this.userService.createUser(data);

            return res.status(201).json(user);
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }

    async getAllUsers(_req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.userService.getAllUsers();

            return res.status(200).json(users);
        } catch (err: any) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async getUserById(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            const user = await this.userService.getUserById(id);

            if (!user) return res.status(404).json({ error: "User not found" });

            return res.status(200).json(user);
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }

    async getUserByEmail(req: Request, res: Response): Promise<Response> {
        try {
            const email = req.params.email;
            const user = await this.userService.getUserByEmail(email);

            if (!user) return res.status(404).json({ error: "User not found" });

            return res.status(200).json(user);
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }
}
