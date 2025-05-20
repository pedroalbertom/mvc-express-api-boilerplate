// File: src/routes/UserRoutes.ts
// Description: This file defines the routes for user-related operations, such as creating a user, getting all users, and getting a user by ID or email.
// It uses Express.js to define the routes and controllers for handling HTTP requests.

import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";
import { UserRepository } from "../repositories/UserRepository";

const router = Router();
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.post("/", (req, res) => userController.createUser(req, res));
router.get("/", (req, res) => userController.getAllUsers(req, res));
router.get("/:id", (req, res) => userController.getUserById(req, res));
router.get("/email/:email", (req, res) => userController.getUserByEmail(req, res));

export default router;
