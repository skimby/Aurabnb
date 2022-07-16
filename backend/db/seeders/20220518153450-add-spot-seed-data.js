'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: '1513 Guest Road',
        city: 'Dallas',
        state: 'Texas',
        country: 'USA',
        lat: 38.8951,
        lng: 38.8952,
        name: 'Peaceful Creekside Guesthouse & Zen Garden Retreat',
        description: "Come enjoy your own private Bali-inspired Guesthouse nestled along a creek in the beautiful Preston Hollow neighborhood of Dallas. Extremely rare to find in Dallas! Relax in a spacious studio room with a king bed, Indonesian day bed, kitchenette, dining room table, walk-in closet, and full bathroom. It's all entirely separated from the main house and very private. Don't miss the creek-side rock garden, patio space and outdoor day bed! Truly a unique oasis for rest and relaxation in Dallas.",
        price: 148
      },
      {
        ownerId: 2,
        address: '2009 Preston Hollow',
        city: 'Dallas',
        state: 'Texas',
        country: 'USA',
        lat: 39.8951,
        lng: 39.8952,
        name: 'Preston Hollow in between home',
        description: 'Welcome to Dallas. Located in the heart of Preston Hollow right off Midway, this chic bungalow is perfect for your Dallas Jaunt.Stay with us for the long term while redoing your home, or figuring out a new home.Weekends are great too.If you have a dog, well we have a large backyard just for our furry friends',
        price: 224
      },
      {
        ownerId: 3,
        address: '4024 Boating Avenue',
        city: 'Oak Point',
        state: 'Texas',
        country: 'USA',
        lat: 40.8951,
        lng: 40.8952,
        name: 'Fun 3 Bedroom Lakehouse with Boat Dock',
        description: "Relax with the family and friends at this getaway on Lake Lewisville. Sip a glass of wine & enjoy the west facing sunset off the covered back patio or sitting around the firepit. House is loaded with board games, ping pong, foosball, & horseshoes to keep everyone entertained. RV parking w/ electric hookup. Convenient boat ramp down the street to launch your boat. Wonderful memories will surely be made at this private retreat.",
        price: 469
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Spots', {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
