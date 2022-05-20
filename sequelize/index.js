const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  user: 'eisuke',
  password: '',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
}); console.log(`sequelize instance immediately after instantiation:${sequelize}`);

const modelDefiners = [
  require('./models/models.user.js');
];

for (modelDefiner of modelDefiners) {
  modelDefiners(sequelize);
} console.log(`sequelize instance immediately after model initialization:${sequelize}`);

module.exports = sequelize;

