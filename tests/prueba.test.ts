
import request from "supertest";

const baseUrl = `localhost:${process.env.PORT || 3000}/`;

describe('GET Test: /organizations ', () => {
	it('Debe devolver un código de estado 200', async () => {
		const response = await request(baseUrl)
			.get('organization');

		expect(response.statusCode).toBe(200);
	});
});

describe('Escenario 1: Obtener métricas de repositorios por tribu:', () => {
  it('Debe devolver un código de estado 200', async () => {
    const response = await request(baseUrl)
      .get('repository/1');
    expect(response.statusCode).toBe(200);
  });
})

describe('Escenario 2: Tribu inexistente:', () => {
  it('Debe devolver un código de estado 404', async () => {
    const response = await request(baseUrl)
      .get('repository/2');
    expect(response.statusCode).toBe(404);
  });
})
