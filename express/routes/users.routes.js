const { models } = require('../../sequelize');

async function getAll(req, res) {
  const users = await models.user.findAll();
  res.status(200).send(users);
}

async function getById(req, res) {
  const user = await models.user.findOne({ where: { id: req.params.id }});
  if (!user) {
    return res.sendStatus(404);
  }
  res.json(user);
}

async function create(req, res) {
  const created = await models.user.create(req.body);
  res.send(created);
}

module.exports = {
  getAll,
  getById,
  create
}

