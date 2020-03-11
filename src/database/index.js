import 'dotenv/config';
import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import User from '../app/models/User';

const models = [User];

// eslint-disable-next-line no-use-before-define
const env = environment();

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(env);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();

function environment() {
  switch (process.env.NODE_ENV) {
    case 'development':
      return databaseConfig.development;
    case 'test':
      return databaseConfig.test;
    case 'production':
      return databaseConfig.production;
    default:
      throw Error('environment not accept');
  }
}
