'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        spotId: 2,
        review: 'What a great place to stay! I really enjoyed my time here.',
        stars: 5
      },
      {
        userId: 1,
        spotId: 8,
        review: 'Overall, I had a great time despite a few issues. ',
        stars: 3
      },
      {
        userId: 1,
        spotId: 3,
        review: 'Pretty decent stay. I would definitely return.',
        stars: 4
      },
      {
        userId: 1,
        spotId: 4,
        review: "Loved this cute home! Would recommend to anyone looking for a comfortable and quick stay.",
        stars: 5
      },
      {
        userId: 2,
        spotId: 3,
        review: 'This was a very pleasant place to spend fourth of July weekend with extended family!',
        stars: 5
      },
      {
        userId: 2,
        spotId: 9,
        review: 'Some communication problems with the host but the place was very beautiful.',
        stars: 3
      },
      {
        userId: 2,
        spotId: 1,
        review: 'Really exceeded my expectations!',
        stars: 5
      },
      {
        userId: 2,
        spotId: 5,
        review: 'I would not recommend this place. The check in process was extremely confusing and not guest-friendly. sorry. ',
        stars: 1
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
