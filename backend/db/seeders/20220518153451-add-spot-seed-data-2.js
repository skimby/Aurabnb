'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: '123 Flamingo Street',
        city: 'Dallas',
        state: 'Texas',
        country: 'USA',
        lat: 38.8951,
        lng: 38.8952,
        name: 'BRAND NEW IG WORTHY, GIRLY PAD, W/KARAOKE ROOM',
        description: 'Tucked into an amazing location in Dallas just minutes away from Uptown, Downtown, Lower Greenville, Deep Ellum, and more - this stunning abode was curated to entertain a variety of guests who like to have a good time and explore everything Dallas has to offer! ',
        price: 468
      },
      {
        ownerId: 2,
        address: '2009 Pool House Lane',
        city: 'Dallas',
        state: 'Texas',
        country: 'USA',
        lat: 39.8951,
        lng: 39.8952,
        name: 'Pool Oasis',
        description: 'Welcome to our 3 bed 2 bath home! My partner and I are excited to open this listing to short-term or long-term renters. Please help us keep our place in great condition if you choose to stay with us.',
        price: 251
      },
      {
        ownerId: 3,
        address: '6983 Private Room',
        city: 'Irving',
        state: 'Texas',
        country: 'USA',
        lat: 40.8951,
        lng: 40.8952,
        name: 'Private Entry | Queen Bed | WiFi | Free Parking',
        description: '*Please read entire description before booking* Welcome to our 1950’s cozy cottage! This private room offers a private entry (24/7 access) and your own parking spot in our drive way. The house was built in 1955 so it has lots of character including squeaky floors. You have easy access to all major highways such as 183, loop 12, & I-35. DFW airport, Las Colinas & Downtown Dallas are only 15 minutes away! TV, coffee maker, mini fridge and microwave are available inside the room!',
        price: 250
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
    return queryInterface.bulkDelete('Reviews', {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
