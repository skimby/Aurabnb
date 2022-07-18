'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/zen-garden/28500e98-fda8-4704-962a-c2cdb759270a.jpg',
        spotId: 1,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/zen-garden/2aa8a931-fefd-4b6a-91a8-27e7ba88820d.jpg',
        spotId: 1,
        reviewId: null
      },

      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/zen-garden/3ba65716-fbf5-4f39-b255-0b7bcb51f2e9.jpg',
        spotId: 1,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/zen-garden/67c5c0b5-9e10-4cbd-b24f-470ddeb4e924.jpg',
        spotId: 1,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/zen-garden/8a42fe3e-63e6-41bb-b697-155b69a62672.jpg',
        spotId: 1,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/zen-garden/9867dd5b-fd0a-434d-9bdd-bf4c418d3b0a.jpg',
        spotId: 1,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/zen-garden/e0f636a2-b397-464a-9bf2-95a1ac5c29be.jpg',
        spotId: 1,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/zen-garden/eec478ea-80d3-457d-bee2-0805205752e2.jpg',
        spotId: 1,
        reviewId: null
      },

      {
        imageableType: 'Review',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/review-img/ebd46eaf-3fce-4a7a-a614-66586037a8e1.jpg',
        spotId: null,
        reviewId: 1
      },
      {
        imageableType: 'Review',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/review-img/6715685F-8EF3-45BB-A4F5-D1185176DE32.JPG',
        spotId: null,
        reviewId: 7
      },
      {
        imageableType: 'Review',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/review-img/IMG_5838.JPG',
        spotId: null,
        reviewId: 7
      },

      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/preston-hollow/03801e7a-1702-47e7-a239-177dae52a4c6.jpg',
        spotId: 2,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/preston-hollow/41da5497-0b1e-4bee-80dc-0ab1ff9d70d5.jpg',
        spotId: 2,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/preston-hollow/4f84aa3e-68c3-4f68-b763-0f8292230538.jpg',
        spotId: 2,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/preston-hollow/6892ee1f-a229-4a3b-b048-032102603d57.jpg',
        spotId: 2,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/preston-hollow/da8aac3b-a60b-4998-8de4-82bc37587599.jpg',
        spotId: 2,
        reviewId: null
      },



      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/boat-house/2035804d-d28f-41e3-8394-7e4a97835631.jpg',
        spotId: 3,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/boat-house/22b158ff-66c3-4afd-a014-6c2206480000.jpg',
        spotId: 3,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/boat-house/369dc2a1-8ad7-4ad3-9035-7701d06fad6f.jpg',
        spotId: 3,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/boat-house/9f884668-30b7-43c2-9e9c-4b6cc0234b20.jpg',
        spotId: 3,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/boat-house/ad0b81e6-f685-4e3f-beaa-87bfc0be2668.jpg',
        spotId: 3,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/boat-house/d718d73e-d096-41a7-9bbe-734ed2601c11.jpg',
        spotId: 3,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/boat-house/f42e0657-54e9-4197-92dc-8b0218aeab7a.jpg',
        spotId: 3,
        reviewId: null
      }

    ])

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Images', {})
  }
};
