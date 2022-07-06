'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/0b66f8d8-461f-4ae6-a194-72cbfbaf73b5.jpg',
        spotId: 7,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/49c7623b-be7c-4c69-801e-b15316c2f304.jpg',
        spotId: 7,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/4c01e692-a47a-46ab-9eb4-019ecc1d24f3.jpg',
        spotId: 7,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/65cf90cb-9a6e-426d-a44d-4c1236537239.jpg',
        spotId: 7,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/86d635c6-11c8-46b6-a0cd-818ad792eb47.jpg',
        spotId: 7,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/9b7a655c-baaf-4337-add8-c7335b021485.jpg',
        spotId: 7,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/cfd13eb0-553c-4e80-9049-219da3b56950.jpg',
        spotId: 7,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/d6c44262-3aaa-4a4a-a26f-1678d54efdc9.jpg',
        spotId: 7,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/f72a3482-7451-40c0-b7e5-2c461b2829c7.jpg',
        spotId: 7,
        reviewId: null
      }
    ])

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Images', {})
  }
};
