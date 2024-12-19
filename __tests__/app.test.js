const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('should respond with a JSON message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    // expect(response.body).toEqual({ message: 'Hello, World!' });
    expect(response.body).toMatchObject({ message: 'Hello, World!' });
  });
});
