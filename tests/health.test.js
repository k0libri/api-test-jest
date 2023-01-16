const { getUsers } = require("../helpers/get-requests");

describe('Health test', () => {
    it('should return a non-empty array', async () => {
        const response = await getUsers();
        expect(response).toBeInstanceOf(Object);
        expect(Object.values(response.data).length).toBeGreaterThanOrEqual(1);
    })
})