import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../src/app';

import factory from '../../__tests__utils/factories';
import truncate from '../../__tests__utils/truncate';

describe('User', () => {
  // clear database before it's
  beforeEach(async () => {
    await truncate();
  });

  it('check if the password is being encrypted when creating user', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const compareHash = await bcrypt.compare('123456', user.password);

    expect(compareHash).toBe(true);
  });

  it('should be able to registrer', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicated email', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send(user);

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.status).toBe(400);
  });
});
