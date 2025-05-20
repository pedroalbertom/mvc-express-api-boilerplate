// File: src/server.ts
// Description: This file initializes the application server and database connection.
// It uses TypeORM to connect to a SQLite database and starts an Express server.
// It also loads environment variables from a .env file using dotenv.
// It imports the AppDataSource from the config directory to establish the database connection.
// It imports the app from the app directory to start the Express server.

import "reflect-metadata";
import dotenv from "dotenv";
import { AppDataSource } from "./config/DataSource";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("✅ Database connected");
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ Database connection error:", err);
    });
