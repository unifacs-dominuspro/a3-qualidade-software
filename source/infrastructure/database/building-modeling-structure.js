const User = require('./model/user-model/user-registration-model');

const databaseSync = () => {
  User.sync();
}

module.exports = databaseSync;