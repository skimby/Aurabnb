'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: '1513 Spring Ridge',
        city: 'Power Mound',
        state: 'Texas',
        country: 'USA',
        lat: 38.8951,
        lng: 38.8952,
        name: 'The Red House',
        description: 'This is The Red House in Power Mound.',
        price: 199
      },
      {
        ownerId: 2,
        address: '2009 Partwright',
        city: 'Power Mound',
        state: 'Texas',
        country: 'USA',
        lat: 39.8951,
        lng: 39.8952,
        name: 'The Big House',
        description: 'This is The Big House in Power Mound with a pool',
        price: 400
      },
      {
        ownerId: 3,
        address: '4024 Backmore Loop',
        city: 'Irzing',
        state: 'Texas',
        country: 'USA',
        lat: 40.8951,
        lng: 40.8952,
        name: 'The Old House',
        description: 'This is The Old House near the airport.',
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
    return queryInterface.bulkDelete('Spots', {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
