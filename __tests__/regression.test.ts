import { userIdWithMethod } from "../utils/helpers";
import { userSchema } from "../json-schema/reqres-schema";
import { matchers } from 'jest-json-schema';

expect.extend(matchers);

describe('Regression test', () => {
    describe("GET /users", () => {
        it('the response should match the schema', async () => {
            const response = await userIdWithMethod("GET", 2);
            //console.log("RESPONSE: ", JSON.stringify(response.data))
            expect(response.data).toMatchSchema(userSchema);
        })
    })
});