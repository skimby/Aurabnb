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
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/irving/4ed0f6f7-59d5-4f9a-9e76-93fa98c67456.jpg',
        spotId: 6,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/irving/79712d85-c95e-4419-8237-2f23dba6857d.jpg',
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
