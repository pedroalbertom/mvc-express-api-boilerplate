// File: src/shared/middlewares/ErrorHandler.ts
// Description: This file defines the error handling middleware for the Express.js application.
// This middleware captures errors thrown in the application and sends a structured response to the client.
// It checks the type of error and responds with appropriate status codes and messages.
// It also logs the error to the console for debugging purposes.

import { Request, Response, NextFunction } from "express";

export function errorHandler(
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
) {
    console.error(err);

    if (err.name === "QueryFailedError") {
        return res.status(400).json({ error: "Database query failed" });
    }

    if (err.message) {
        return res.status(400).json({ error: err.message });
    }

    return res.status(500).json({ error: "Internal Server Error" });
}
