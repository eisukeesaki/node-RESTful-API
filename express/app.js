const express = require('express');

const routes = {
  users: require('./routes/users.routes')
};

const app = express();

app.use(express.urlencoded({ extended: true }));

for (const [routeName, routeController] of Object.entries(routes)) {
  if (routeController.getAll) {
    app.get(`/api/${routeName}`, routeController.getAll);
  }
  if (routeController.getById) {
    app.get(`/api/${routeName}/:id`, routeController.getById);
  }
  if (routeController.create) {
    app.post(`/api/${routeName}`, routeController.create);
  }
  if (routeController.update) {
    app.put(`/api/${routeName}/:id`, routeController.update);
  }
  if (routeController.destroy) {
    app.delete(`/api/${routeName}/:id`, routeController.destroy);
  }
}

module.exports = app;

