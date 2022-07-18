'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/deep-ellum/464b8fae-ee3a-4ba3-a7f2-b6c759216e07.jpg',
        spotId: 9,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/deep-ellum/786bbe8e-9643-4305-a78b-2d99a76dcbfd.jpg',
        spotId: 9,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/deep-ellum/c1e0861e-5a84-4bb2-8527-bdce0f38b3be.jpg',
        spotId: 9,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/deep-ellum/ac14d556-a330-48a4-ac44-642bc7562c57.jpg',
        spotId: 9,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/deep-ellum/cdd53f5e-4348-41c0-8999-21735b29c145.jpeg',
        spotId: 9,
        reviewId: null
      }
      ,
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/deep-ellum/f91bea51-9548-45b8-b9b5-48ae65773b2b.jpg',
        spotId: 9,
        reviewId: null
      }
    ])

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Images', {})
  }
};
