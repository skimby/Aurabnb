'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/pool-oasis/05099a9e-d7b0-4532-8338-d534438dd369.jpg',
        spotId: 5,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/pool-oasis/77088ed1-9479-45f3-aedd-66fa5d5f1784.jpg',
        spotId: 5,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/pool-oasis/8c720c22-2d32-49e7-8952-dd10996c29d1.jpg',
        spotId: 5,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/pool-oasis/b81cf3d0-2065-4303-b7f1-acf3398c3512.jpg',
        spotId: 5,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/pool-oasis/e78b4a06-28e6-43de-a36a-cc2fa2e88a68.jpg',
        spotId: 5,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/pool-oasis/e9aaba76-e223-47a3-a54b-67a1895073f6.jpg',
        spotId: 5,
        reviewId: null
      }
    ])

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Images', {})
  }
};
