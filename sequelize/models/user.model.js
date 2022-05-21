const { DataTypes } = require('sequelize');

function defineUser(sequelize) {
  sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    }
  });
}

module.exports = defineUser;

