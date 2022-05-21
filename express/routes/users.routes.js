const { models } = require('../../sequelize');

async function getAll(req, res) {
  const users = await models.user.findAll();
  res.status(200).send(users);
}

module.exports = {
  getAll
}

