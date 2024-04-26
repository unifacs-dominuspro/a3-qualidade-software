const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const environment = process.env;

const sequelize = new Sequelize(environment.DB_NAME, environment.DB_USERNAME, environment.DB_PASSWORD, {
  host: environment.DB_HOST,
  dialect: environment.DB_DIALECT,
  port: parseInt(environment.DB_PORT),
});

module.exports = sequelize;