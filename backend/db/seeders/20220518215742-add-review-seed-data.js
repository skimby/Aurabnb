'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        spotId: 1,
        review: 'What a great place to stay!',
        stars: 4
      },
      {
        userId: 2,
        spotId: 2,
        review: 'Not a great place to stay.',
        stars: 1
      },
      {
        userId: 3,
        spotId: 3,
        review: 'It was okay.',
        stars: 3
      }
    ])

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Reviews',
      {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
