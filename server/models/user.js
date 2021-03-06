'use strict';
const { sequelize, SequelizeClass } = require(__BASE + 'config/database');

const User = sequelize.define('user', {
  username: {
    type: SequelizeClass.STRING
  },
  password: {
    type: SequelizeClass.STRING
  },
  email: {
    type: SequelizeClass.STRING
  }
});

module.exports = User;
