'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/IG-house/553d5312-fc4f-42bb-baa8-4332a965800a(1).jpg',
        spotId: 4,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/IG-house/83874e56-a6a8-408a-88ba-dfc7ce959228.jpg',
        spotId: 4,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/IG-house/91da5005-c145-46f5-b8be-1220070d852d.jpg',
        spotId: 4,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/IG-house/979eeefc-982e-453c-9c0b-766c3d09ed4b.jpg',
        spotId: 4,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/IG-house/9af6b018-f6b4-4809-bbf8-a228723f8c92.jpg',
        spotId: 4,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/IG-house/9f401df8-6b2b-4d56-b890-ddf7d82df267(1).jpg',
        spotId: 4,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/IG-house/b0f6259d-7a2f-4dfc-a68a-595730b85e3e.jpg',
        spotId: 4,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/IG-house/c44f49ec-e54d-4fa8-abf8-bf9ef57cfc7d.jpg',
        spotId: 4,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/IG-house/c9f32962-2e13-4dbf-96f7-84f2a13de657.jpg',
        spotId: 4,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/IG-house/cb203f2b-4d3c-44b9-922a-6ac9e5bd6152.jpg',
        spotId: 4,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/IG-house/d7669cc0-73be-47d9-887b-645e036532f2.jpg',
        spotId: 4,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/IG-house/d80c038f-4a13-4615-8189-ad8f412a473a.jpg',
        spotId: 4,
        reviewId: null
      }


    ])

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Images', {})
  }
};
