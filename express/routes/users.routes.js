const { models } = require('../../sequelize');

async function getAll(req, res) {
  const users = await models.user.findAll();
  res.status(200).send(users);
}

async function getById(req, res) {
  const user = await models.user.findOne({
    where: {
      id: req.params.id
    }
  });
  if (!user) {
    res.sendStatus(404);
  } else {
    res.json(user);
  }
}

async function create(req, res) {
  if (req.params.id) {
    res.status(400).send("Bad request. ID should not be provided, since it is automatically determined by the database.");
  } else if (!req.body.username) {
   res.status(400).send('username not provided');
  } else {
    await models.user.create(req.body);
    res.status(201).end();
  }
}

async function update(req, res) {
  if (!req.body.username) {
   res.status(400).send('username not provided');
  } else {
    await models.user.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).end();
  }
}

async function destroy(req, res) {
  const isDeleted = await models.user.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).end();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy
}

