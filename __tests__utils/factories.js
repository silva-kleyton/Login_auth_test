/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker';
import { factory } from 'factory-girl';

import User from '../src/app/models/User';

// Create users fakers
factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export default factory;
