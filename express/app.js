const express = require('express');

const routes = {
  users: require('./routes/users.routes')
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

for ([routeName, routeController] = Object.entries(routes)) {
  if (routeController.getAll) {
    app.get(`/api/${routeName}`,
    routeController.getAll());
  }
}

module.exports = app;

