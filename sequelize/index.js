require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DB,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
});

const modelDefiners = [
  require('./models/user.model')
  // other models goes here
];

for (modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

module.exports = sequelize;

