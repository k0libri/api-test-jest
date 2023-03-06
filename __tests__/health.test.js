const { getAllUsers, userIdWithMethod } = require("../utils/helpers");
const { StatusCodes } = require('http-status-codes');

describe('Health test', () => {
    describe("GET /users", () => {
        it('should return a non-empty object', async () => {
            const response = await getAllUsers();
            expect(response.data).toBeInstanceOf(Object);
            expect(Object.values(response.data).length).toBeGreaterThan(1);
            expect(response.status).toBe(StatusCodes.OK);
        });

        it('should return single user', async () => {
            const response = await userIdWithMethod("GET", 2);
            expect(response.data).toBeInstanceOf(Object);
            expect(response.data.data.id).toBe(2);
            expect(response.status).toBe(StatusCodes.OK);
        })
    })

    describe("PUT /users", () => {
        it('should return the updated user id', async () => {
            const response = await userIdWithMethod("PUT", 2);
            expect(response.data).toBeInstanceOf(Object);
            expect(response.status).toBe(StatusCodes.OK);
        })
    })

    describe("PATCH /users", () => {
        it('should return modified id', async () => {
            const response = await userIdWithMethod("PATCH", 2);
            expect(response.data).toBeInstanceOf(Object);
            expect(response.status).toBe(StatusCodes.OK);
        })
    })

    describe("DELETE /users", () => {
        it('should return deleted id', async () => {
            const response = await userIdWithMethod("DELETE", 2);
            expect(response.status).toBe(StatusCodes.NO_CONTENT);
        })
    })
});