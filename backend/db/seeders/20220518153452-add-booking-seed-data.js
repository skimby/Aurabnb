'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bookings', [
      {
        userId: 1,
        spotId: 1,
        startDate: '2022-05-18 15:23:29',
        endDate: '2022-05-20 15:23:29'
      },
      {
        userId: 2,
        spotId: 2,
        startDate: '2022-05-18 15:23:29',
        endDate: '2022-05-20 15:23:29'
      },
      {
        userId: 3,
        spotId: 3,
        startDate: '2022-05-18 15:23:29',
        endDate: '2022-05-20 15:23:29'
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Bookings', {

    })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
