// const request = require('supertest');
// const app = require('../../src/app');
import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
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
});
