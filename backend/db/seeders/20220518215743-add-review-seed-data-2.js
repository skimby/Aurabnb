'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 2,
        spotId: 4,
        review: 'Such a cute IG spot!! I rented out the space for a photoshoot and only was there about 2 hours! The place is stunning, and its a great location near uptown Dallas! Host was kind, left a really cool laminated book of eats and things to do! Getting in and out was simple! will definitely be returning to stay the night with some friends very soon!!        ',
        stars: 5
      },
      {
        userId: 3,
        spotId: 4,
        review: 'DEFINITELY lives up to the fabulous description. My friends and I enjoyed our stay so much. The attention to detail does not go unnoticed as well as the close by eateries! Such a big fan of this space. Hope to be back soon',
        stars: 5
      },
      {
        userId: 1,
        spotId: 5,
        review: 'Overall a good stay! The pool was warm and it lights up in the dark. The beds were comfortable and so is the couch. The security system and cameras made me feel more self and protected if anything were to happen to me or my property. The host also did a really good job at communicating.',
        stars: 5
      },
      {
        userId: 3,
        spotId: 5,
        review: 'Beautiful property. Thank you for professionalism and kindness. I look forward to doing business with you again.',
        stars: 4
      },
      {
        userId: 1,
        spotId: 6,
        review: '5/5 recommended!!',
        stars: 5
      },
      {
        userId: 2,
        spotId: 6,
        review: 'The place is really nice and ideal for 2 people. The host really communicated well. I would definitely recommend Keyla’s place!',
        stars: 4
      },
      {
        userId: 2,
        spotId: 7,
        review: 'We had a great stay at this property. So many details in place with a family in mind. ',
        stars: 5
      },
      {
        userId: 2,
        spotId: 8,
        review: 'The place is really nice and ideal for 2 people. The host really communicated well. I would definitely recommend Keyla’s place!',
        stars: 5
      },
      {
        userId: 3,
        spotId: 8,
        review: 'This apartment is in a great location, and is super cute!',
        stars: 4
      },
      {
        userId: 1,
        spotId: 9,
        review: 'Great location, great host, great communication. Everything was up to par!',
        stars: 5
      },
      {
        userId: 2,
        spotId: 9,
        review: 'Enjoyed the placed. Did a minor cleaning in one to two places but I don’t regret staying here. Book this place',
        stars: 3
      },
      {
        userId: 1,
        spotId: 10,
        review: 'Our stay here was amazing, the house was amazing with plenty of space. We loved the beautiful backyard and pool. The backyard was so peaceful we hardly wanted to leave. Paul was a super helpful host and we will definitely be contacting him the next time were in town! :)',
        stars: 4
      },
      {
        userId: 3,
        spotId: 10,
        review: '❤️ This place was great and convenient to our trip. Clean home - game room was a hit! swimming pool was fantastic. quite area. Paul was very responsive.The home is close to grocery stores and near highway 75 too.Will definitely book again.',
        stars: 5
      }
    ])

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Reviews',
      {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
