const app = require('./express');
const sequelize = require('./sequelize');
const PORT = 4242;

async function assertDBConnectionOK() {
  try {
    await sequelize.authenticate();
    console.log('successfully connected to db');
  }
  catch (error) {
    console.log('failed to connect to db');
    console.log(error.message);
    process.exit(1);
  }
}

async function init() {
  await assertDBConnectionOK();

  app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`);
  });
}

init();

