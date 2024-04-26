const Sequelize = require('sequelize');
const sequelize = require('../../../configuration/connect-database');
const bcrypt = require('bcrypt');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.STRING,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  schooling: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  is_fundamental_two: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
}, {
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSaltSync(10, 'a');
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
    beforeUpdate: async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSaltSync(10, 'a');
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }
  },
  instanceMethods: {
    validPassword: (password) => {
      return bcrypt.compareSync(password, this.password);
    }
  },
});

User.prototype.validPassword = async (password, hash) => {
  return await bcrypt.compareSync(password, hash);
};

module.exports = User;