const { getAllUsers, userIdWithMethod } = require("../utils/helpers");
const chai = require('chai');
const expect = chai.expect;
const { StatusCodes } = require('http-status-codes');

describe('Health test', () => {
    describe("GET /users", () => {
        it('should return a non-empty object', async () => {
            const response = await getAllUsers();
            expect(response.data).to.be.an('object');
            expect(Object.values(response.data).length).greaterThan(1);
            expect(response.status).to.equal(StatusCodes.OK);
        });

        it('should return single user', async () => {
            const response = await userIdWithMethod("GET", 2);
            expect(response.data).to.be.an('object');
            expect(response.data.data.id).to.equal(2);
            expect(response.status).to.equal(StatusCodes.OK);
        })
    })

    describe("PUT /users", () => {
        it('should return the updated user id', async () => {
            const response = await userIdWithMethod("PUT", 2);
            expect(response.data).to.be.an('object');
            expect(response.status).to.equal(StatusCodes.OK);
        })
    })

    describe("PATCH /users", () => {
        it('should return modified id', async () => {
            const response = await userIdWithMethod("PATCH", 2);
            expect(response.data).to.be.an('object');
            expect(response.status).to.equal(StatusCodes.OK);
        })
    })

    describe("DELETE /users", () => {
        it('should return deleted id', async () => {
            const response = await userIdWithMethod("DELETE", 2);
            expect(response.status).to.equal(StatusCodes.NO_CONTENT);
        })
    })
});