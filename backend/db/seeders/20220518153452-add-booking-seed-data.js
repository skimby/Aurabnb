'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bookings', [
      {
        userId: 1,
        spotId: 2,
        startDate: '2022-05-18 15:23:29',
        endDate: '2022-05-20 15:23:29'
      },
      {
        userId: 1,
        spotId: 8,
        startDate: '2022-06-18 15:23:29',
        endDate: '2022-06-19 15:23:29'
      },
      {
        userId: 1,
        spotId: 3,
        startDate: '2022-07-01 15:23:29',
        endDate: '2022-07-01 15:23:29'
      },
      {
        userId: 1,
        spotId: 4,
        startDate: '2022-07-07 15:23:29',
        endDate: '2022-07-07 15:23:29'
      },
      {
        userId: 2,
        spotId: 3,
        startDate: '2022-05-18 15:23:29',
        endDate: '2022-05-20 15:23:29'
      },
      {
        userId: 2,
        spotId: 9,
        startDate: '2022-02-01 15:23:29',
        endDate: '2022-02-02 15:23:29'
      },
      {
        userId: 2,
        spotId: 1,
        startDate: '2022-02-03 15:23:29',
        endDate: '2022-02-04 15:23:29'
      },
      {
        userId: 2,
        spotId: 5,
        startDate: '2022-02-05 15:23:29',
        endDate: '2022-02-06 15:23:29'
      },
      {
        userId: 3,
        spotId: 4,
        startDate: '2022-02-07 15:23:29',
        endDate: '2022-02-08 15:23:29'
      },
      {
        userId: 3,
        spotId: 10,
        startDate: '2022-02-09 15:23:29',
        endDate: '2022-02-10 15:23:29'
      },
      {
        userId: 3,
        spotId: 6,
        startDate: '2022-02-11 15:23:29',
        endDate: '2022-02-12 15:23:29'
      },
      {
        userId: 3,
        spotId: 7,
        startDate: '2022-02-13 15:23:29',
        endDate: '2022-02-14 15:23:29'
      },
      {
        userId: 4,
        spotId: 5,
        startDate: '2022-02-15 15:23:29',
        endDate: '2022-02-15 15:23:29'
      },
      {
        userId: 4,
        spotId: 1,
        startDate: '2022-02-16 15:23:29',
        endDate: '2022-02-16 15:23:29'
      },
      {
        userId: 4,
        spotId: 8,
        startDate: '2022-02-17 15:23:29',
        endDate: '2022-02-17 15:23:29'
      },
      {
        userId: 4,
        spotId: 10,
        startDate: '2022-02-18 15:23:29',
        endDate: '2022-02-18 15:23:29'
      },
      {
        userId: 5,
        spotId: 6,
        startDate: '2022-02-19 15:23:29',
        endDate: '2022-02-19 15:23:29'
      },
      {
        userId: 5,
        spotId: 7,
        startDate: '2022-02-20 15:23:29',
        endDate: '2022-02-20 15:23:29'
      },
      {
        userId: 5,
        spotId: 9,
        startDate: '2022-02-21 15:23:29',
        endDate: '2022-02-21 15:23:29'
      },
      {
        userId: 5,
        spotId: 2,
        startDate: '2022-02-22 15:23:29',
        endDate: '2022-02-22 15:23:29'
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
