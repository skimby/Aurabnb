'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/irving/36d8a9cc-d402-4451-8c57-b4d1a4ada9d8.jpg',
        spotId: 6,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/irving/27164898-86e0-453e-88f3-0e34ea1d6ea0.jpg',
        spotId: 6,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/irving/ad95ffca-a49a-41e9-aed6-981c48f47a5c.jpg',
        spotId: 6,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/irving/0d62b6fd-5f05-4028-b794-b95acb206f12.jpg',
        spotId: 6,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/irving/dea1bc46-ac2b-4e24-b352-1c7a76c61654.jpg',
        spotId: 6,
        reviewId: null
      }
    ])

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Images', {})
  }
};
