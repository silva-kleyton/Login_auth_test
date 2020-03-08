module.exports = {
  development: {
    username: 'postgres',
    password: 'admin',
    database: 'postgres',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false,
    define: {
      timestamp: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  test: {
    host: 'localhost',
    username: '',
    password: '',
    database: 'db_test',
    dialect: 'sqlite',
  },
};
