'use strict';
const bcrypt = require('bcryptjs');
const { sequelize } = require('../models');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'user1@user.com',
        username: 'user1',
        hashedPassword: bcrypt.hashSync('password1')
      },
      {
        email: 'user2@user.com',
        username: 'user2',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user3@user.com',
        username: 'user3',
        hashedPassword: bcrypt.hashSync('password3')
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    //what is this ***
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['user1', 'user2', 'user3'] }
    }, {});
  }
};
