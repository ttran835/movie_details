const request = require('supertest');
const server = require('../../server/index');

describe('Should be able to get seperate Routes and return correct information', () => {
  it('should send 200 status when hitting /home', async () => {
    const response = await request(server).get('/home');
    expect(response.status).toBe(200);
  });

  it('should send 201 status when hitting /home', async () => {
    const response = await request(server).post('/home');
    expect(response.status(201));
  });

  it('should send 200 status when hitting /api/back-end', async () => {
    const response = await request(server).get('/api/back-end');
    expect(response.status).toBe(200);
  });

  it('should send 201 status when hitting /api/back-end', async () => {
    const response = await request(server).post('/api/back-end');
    expect(response.status).toBe(201);
  });
});
