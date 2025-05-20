// File: src/app.ts
// Description: This file sets up the Express application.
// It includes middleware for security, logging, and parsing JSON requests.
// It also defines the routes for user-related operations and a health check endpoint.
// It uses the error handler middleware to handle errors in the application.
// It exports the configured Express application for use in other parts of the application.

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/UserRoutes";
import { errorHandler } from "./shared/middlewares/ErrorHandler";

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

app.use(errorHandler);

export default app;
