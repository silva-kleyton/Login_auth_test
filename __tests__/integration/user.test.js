import request from 'supertest';
import app from '../../src/app';

import truncate from '../../__tests__utils/truncate';

describe('User', () => {
  // clear database before it's
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to registrer', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Kleyton',
        email: 'kleyton@teste.com.br',
        password: '123456',
      });

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicated email', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'Kleyton',
        email: 'kleyton@teste.com.br',
        password: '123456',
      });

    const response = await request(app)
      .post('/users')
      .send({
        name: 'Kleyton',
        email: 'kleyton@teste.com.br',
        password: '123456',
      });

    expect(response.status).toBe(400);
  });
});
