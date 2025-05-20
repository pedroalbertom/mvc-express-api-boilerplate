// File: src/shared/errors/NotFoundError.ts
// Description: This file defines the NotFoundError class, which extends the AppError class.
// It is used to handle "not found" errors in the application.
// The class includes a constructor that takes an optional message parameter.
// If no message is provided, it defaults to "Resource not found".
// This allows for better error handling and debugging in the application.

import { AppError } from "./AppError";

export class NotFoundError extends AppError {
    constructor(message = "Resource not found") {
        super(message, 404);
    }
}
