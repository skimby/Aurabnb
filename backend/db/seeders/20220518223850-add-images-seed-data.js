'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/power-mound/23a02d127997540a6596d62e651a0140-p_c.jpeg',
        spotId: 1,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/power-mound/3349c30dc156911016262fb65af7da7dl-m3652894416od-w480_h480_q80.jpeg',
        spotId: 1,
        reviewId: null
      },

      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/power-mound/349b0d626a3ca5f27f32602108186274l-m0od-w480_h480_q80.jpeg',
        spotId: 1,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/power-mound/48fc794d5de870c3ea4f8ecc63ddae59-p_c.jpeg',
        spotId: 1,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/power-mound/c89589a57c9ce562508a80330733fdfcl-m4196730048od-w480_h360_x2.jpeg',
        spotId: 1,
        reviewId: null
      },


      {
        imageableType: 'Review',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/power-mound/c89589a57c9ce562508a80330733fdfcl-m4196730048od-w480_h360_x2.jpeg',
        spotId: null,
        reviewId: 1
      },
      {
        imageableType: 'Review',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/power-mound/c89589a57c9ce562508a80330733fdfcl-m4196730048od-w480_h360_x2.jpeg',
        spotId: null,
        reviewId: 2
      },



      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/cartwright/54978353a65122cdee73d5d48b55d729-cc_ft_960.jpeg',
        spotId: 2,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/cartwright/6c8077c7bad04f0fa31f06267c63a2ad-cc_ft_384.jpeg',
        spotId: 2,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/cartwright/download.jpeg',
        spotId: 2,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/cartwright/img-21.jpeg',
        spotId: 2,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/cartwright/img-29.jpeg',
        spotId: 2,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/cartwright/img-3.jpeg',
        spotId: 2,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/cartwright/img-30.jpeg',
        spotId: 2,
        reviewId: null
      },



      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/0b66f8d8-461f-4ae6-a194-72cbfbaf73b5.jpg',
        spotId: 3,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/49c7623b-be7c-4c69-801e-b15316c2f304.jpg',
        spotId: 3,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/4c01e692-a47a-46ab-9eb4-019ecc1d24f3.jpg',
        spotId: 3,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/65cf90cb-9a6e-426d-a44d-4c1236537239.jpg',
        spotId: 3,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/86d635c6-11c8-46b6-a0cd-818ad792eb47.jpg',
        spotId: 3,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/9b7a655c-baaf-4337-add8-c7335b021485.jpg',
        spotId: 3,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/cfd13eb0-553c-4e80-9049-219da3b56950.jpg',
        spotId: 3,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/d6c44262-3aaa-4a4a-a26f-1678d54efdc9.jpg',
        spotId: 3,
        reviewId: null
      },
      {
        imageableType: 'Spot',
        url: 'https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/the-colony/f72a3482-7451-40c0-b7e5-2c461b2829c7.jpg',
        spotId: 3,
        reviewId: null
      },
    ])

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Images', {})
  }
};
