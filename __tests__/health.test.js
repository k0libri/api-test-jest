const { getUsers } = require("../helpers/get-requests");
const chai = require('chai');
const expect = chai.expect;

describe('Health test', () => {
    it('should return a non-empty object', async () => {
        const response = await getUsers();
        expect(response.data).to.be.an('object');
        expect(Object.values(response.data).length).greaterThan(1);
    })
})