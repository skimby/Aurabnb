'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        imageableType: 'Spot',
        url: 'https://github.com/skimby/AirBnB/blob/main/red-house.jpeg',
        spotId: 1,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://github.com/skimby/AirBnB/blob/main/big-house.jpeg',
        spotId: 2,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://github.com/skimby/AirBnB/blob/main/old-house.jpeg',
        spotId: 3,
        reviewId: null
      },
      {
        imageableType: 'Review',
        url: 'https://github.com/skimby/AirBnB/blob/main/red-house.jpeg',
        spotId: null,
        reviewId: 1
      },
      {
        imageableType: 'Review',
        url: 'https://github.com/skimby/AirBnB/blob/main/big-house.jpeg',
        spotId: null,
        reviewId: 2
      },
      {
        imageableType: 'Review',
        url: 'https://github.com/skimby/AirBnB/blob/main/old-house.jpeg',
        spotId: null,
        reviewId: 3
      }
    ])

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Images', {})
  }
};
