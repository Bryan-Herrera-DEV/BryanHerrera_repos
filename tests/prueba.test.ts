
import request from "supertest";

const baseUrl = `localhost:${process.env.PORT || 3000}/`;

describe('GET Test: /organizations ', () => {
	it('Debe devolver un código de estado 200', async () => {
		const response = await request(baseUrl)
			.get('organization');

		expect(response.statusCode).toBe(200);
	});
});
