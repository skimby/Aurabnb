'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/plano/0864168b-6e0f-4bf4-83c4-816654759cd5.jpg',
        spotId: 10,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/plano/1fe1cbba-e59e-424d-aa74-61827b70ec88.jpg',
        spotId: 10,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/plano/2e449495-f6af-48f0-a515-9099fca79021.jpg',
        spotId: 10,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/plano/58310cb0-124a-43e9-abbc-9044dc1b0a02.jpg',
        spotId: 10,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/plano/5e41f7f2-1b38-49c9-99e1-f3165b2a5841.jpg',
        spotId: 10,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/plano/970941c0-c3f5-4295-84f1-3c1a7f0ad6e5.jpg',
        spotId: 10,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/plano/a66d1cda-2c7b-4631-bb73-60e277204804.jpg',
        spotId: 10,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/plano/c42a3cff-5c85-45bf-8df9-5551b474abbe.jpg',
        spotId: 10,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/plano/fdcfa8ec-73ca-48c2-a1fc-0bca5f355404.jpg',
        spotId: 10,
        reviewId: null
      }
    ])

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Images', {})
  }
};
