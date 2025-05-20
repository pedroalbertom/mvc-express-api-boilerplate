// File: src/shared/errors/AppError.ts
// Description: This file defines the AppError class, which extends the built-in Error class.
// It is used to handle application-specific errors in a consistent way.
// The class includes a statusCode property to indicate the HTTP status code associated with the error.
// It also includes a constructor that takes a message and an optional status code.
// The constructor calls the parent class constructor with the message and captures the stack trace.
// This allows for better error handling and debugging in the application.

export class AppError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
