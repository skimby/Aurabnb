'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/medical/183246da-1fd8-4db0-9bb2-40aa957c02d7.jpg',
        spotId: 8,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/medical/278590e4-f0ee-42f9-8e5e-877439160e83.jpg',
        spotId: 8,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/medical/735297e0-2c31-4b84-9334-55fbaafc2f37.jpg',
        spotId: 8,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/medical/7ba7e98c-11c0-4529-a2e8-3a376c8a09c5.jpg',
        spotId: 8,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/medical/8e5e2f71-f292-48d5-9416-8684346c57ba.jpg',
        spotId: 8,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/medical/a152cd32-8903-4da9-915e-864ea18689eb.jpg',
        spotId: 8,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/medical/aa13b3b0-4681-4a1d-9b19-7d993fa4f1ea.jpg',
        spotId: 8,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/medical/c456a36e-5ccf-4309-8571-1cb1cd1f06cb.jpg',
        spotId: 8,
        reviewId: null
      }
    ])

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Images', {})
  }
};
