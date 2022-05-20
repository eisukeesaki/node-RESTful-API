const stringify = require('json-stringify-safe');

require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DB,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
}); console.log(`sequelize instance immediately after instantiation:${stringify(sequelize, null, 2)}`);

const modelDefiners = [
  require('./models/user.model')
];

for (modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
} console.log(`sequelize instance immediately after model initialization:${stringify(sequelize, null, 2)}`);

module.exports = sequelize;

