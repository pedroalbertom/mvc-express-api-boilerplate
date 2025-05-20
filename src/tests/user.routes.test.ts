// tests/user.routes.test.ts
import request from "supertest";
import app from "../app";
import { AppDataSource } from "../config/DataSource";

beforeAll(async () => {
    await AppDataSource.initialize();
    await AppDataSource.synchronize(true);
});

afterAll(async () => {
    await AppDataSource.destroy();
});

describe("User routes", () => {
    let createdUserId: number;

    it("should create a user", async () => {
        const res = await request(app)
            .post("/user")
            .send({ name: "John", email: "john@example.com" });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("id");
        createdUserId = res.body.id;
    });

    it("should return all users", async () => {
        const res = await request(app).get("/user");
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.users)).toBe(true);
        expect(res.body.users.length).toBeGreaterThan(0);
    });


    it("should get a user by id", async () => {
        const res = await request(app).get(`/user/${createdUserId}`);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("id", createdUserId);
        expect(res.body).toHaveProperty("name", "John");
        expect(res.body).toHaveProperty("email", "john@example.com");
    });

    it("should update a user", async () => {
        const res = await request(app)
            .put(`/user/${createdUserId}`)
            .send({ name: "Updated Name", email: "updated@example.com" });

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("name", "Updated Name");
        expect(res.body).toHaveProperty("email", "updated@example.com");
    });

    it("should delete a user", async () => {
        const res = await request(app).delete(`/user/${createdUserId}`);
        expect(res.status).toBe(204);
    });

    it("should return 404 when getting a deleted user", async () => {
        const res = await request(app).get(`/user/${createdUserId}`);
        expect(res.status).toBe(404);
    });
});
