'use strict';
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize'); //same thing as const Op = Sequelize.Op; ?

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Amy',
        lastName: 'Tan',
        email: 'amytan@gmail.com',
        password: bcrypt.hashSync('password1'),
        isHost: true
      },
      {
        firstName: 'Lady',
        lastName: 'Gaga',
        email: 'ladygaga@gmail.com',
        password: bcrypt.hashSync('password2'),
        isHost: true
      },
      {
        firstName: 'Joe',
        lastName: 'Biden',
        email: 'joebiden@gmail.com',
        password: bcrypt.hashSync('password3'),
        isHost: true
      },
      {
        firstName: 'Smoochie',
        lastName: 'Kim',
        email: 'smoochiekim@gmail.com',
        password: bcrypt.hashSync('password4'),
        isHost: true
      },
      {
        firstName: 'Princess',
        lastName: 'Peach',
        email: 'princesspeach@gmail.com',
        password: bcrypt.hashSync('password5'),
        isHost: true
      },
      {
        firstName: 'Demo',
        lastName: 'User',
        email: 'demouser@gmail.com',
        password: bcrypt.hashSync('password'),
        isHost: false
      }

    ])

  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users'), {
      email: { [Op.in]: ['amytan@gmail.com', 'ladygaga@gmail.com', 'joebiden@gmail.com', 'demouser@gmail.com'] }
    }

  }
};
