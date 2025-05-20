import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import {
    CreateUserInput,
    UpdateUserInput,
    UserListOutput,
    UserOutput,
} from "../dtos/User";
import { AppError } from "../shared/errors/AppError";

export class UserController {
    constructor(private userService: UserService) {}

    private handleError(err: any, res: Response): Response {
        if (err instanceof AppError) {
            return res.status(err.statusCode).json({ error: err.message });
        }
        return res.status(500).json({ error: "Internal server error" });
    }

    async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const data: CreateUserInput = req.body;
            const user: UserOutput = await this.userService.createUser(data);
            return res.status(201).json(user);
        } catch (err: any) {
            return this.handleError(err, res);
        }
    }

    async getAllUsers(_req: Request, res: Response): Promise<Response> {
        try {
            const users: UserListOutput = await this.userService.getAllUsers();
            return res.status(200).json(users);
        } catch (err: any) {
            return this.handleError(err, res);
        }
    }

    async getUserById(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: "Invalid user ID" });
            }

            const user: UserOutput | null = await this.userService.getUserById(id);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            return res.status(200).json(user);
        } catch (err: any) {
            return this.handleError(err, res);
        }
    }

    async updateUser(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: "Invalid user ID" });
            }

            const data: UpdateUserInput = req.body;
            const updatedUser: UserOutput = await this.userService.updateUser(id, data);
            return res.status(200).json(updatedUser);
        } catch (err: any) {
            return this.handleError(err, res);
        }
    }

    async deleteUser(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: "Invalid user ID" });
            }

            await this.userService.deleteUser(id);
            return res.status(204).send();
        } catch (err: any) {
            return this.handleError(err, res);
        }
    }
}
