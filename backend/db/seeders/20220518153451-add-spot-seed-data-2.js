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
        lat: 38.8955,
        lng: 38.8922,
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
        lat: 39.8900,
        lng: 39.8900,
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
        lat: 40.8901,
        lng: 40.8042,
        name: 'Private Entry | Queen Bed | WiFi | Free Parking',
        description: '*Please read entire description before booking* Welcome to our 1950s cozy cottage! This private room offers a private entry (24/7 access) and your own parking spot in our drive way. The house was built in 1955 so it has lots of character including squeaky floors. You have easy access to all major highways such as 183, loop 12, & I-35. DFW airport, Las Colinas & Downtown Dallas are only 15 minutes away! TV, coffee maker, mini fridge and microwave are available inside the room!',
        price: 250
      },
      {
        ownerId: 1,
        address: '3832 Colony Street',
        city: 'The Colony',
        state: 'Texas',
        country: 'USA',
        lat: 38.0951,
        lng: 38.0952,
        name: '2,000 SF Home W/ Pool + Game Room + Backyard Patio',
        description: 'A 2,000 SF 1 story home near Lewisville Lake. A getaway home with an indoor game room consisting of an air hockey, foosball, and basketball table with access to private pool and patio area. With nearby lake, parks, golf course, malls, museums, restaurants and bars within your surrounding areas. You will near by golfing, shopping, swimming, boating, and fishing.',
        price: 207
      },
      {
        ownerId: 1,
        address: '3832 Medicinal Drive',
        city: 'Dallas',
        state: 'Texas',
        country: 'USA',
        lat: 34.0951,
        lng: 36.0952,
        name: 'Brand New 1Bd close to Baylor & Medical District!',
        description: '*Newly Renovated Beautiful Vintage Building All Brand New* Ideal for Nurses and Doctors, Insurance Relocations, High Tech, Essential Workers, Construction Workers and Vacationers alike. Long Term Stays Welcome! Centrally located in the heart of Uptown/Oak Lawn minutes away from the Medical District and Baylor.',
        price: 101
      },
      {
        ownerId: 3,
        address: '3393 Deep Ellum',
        city: 'Dallas',
        state: 'Texas',
        country: 'USA',
        lat: 30.0951,
        lng: 30.0952,
        name: 'The Deep Ellum/Lower Greenville LightShow',
        description: '*Location, Location, Location* BE SURE TO CHECK OUT MY OTHER LISTINGS! (Click Profile Picture) (Disinfected after every guest) (If you get an error message while booking let me know) Plenty of Natural light in this newly remodeled Boutique complex. Located in the center of Dallas. Food and bars are walking distance. World Famous Jimmys Food store is a few steps away. Deep Ellum is 1.5 miles away, Can walk to Lower Greenville. A convenience store is walking distance if you forgot something. ',
        price: 95
      },
      {
        ownerId: 2,
        address: '8990 Plano Drive',
        city: 'Plano',
        state: 'Texas',
        country: 'USA',
        lat: 38.0951,
        lng: 38.0952,
        name: 'Swimming Pool, 5 Bedroom 3 Kings Games No PARTIES',
        description: 'Just listed! Relax with the whole family in this beautifully remodeled 5 bedroom home with 3 King Beds, 1 Queen, & 8 twins! Beautiful back yard with fire pit & BBQ! The whole group will enjoy easy access to everything from this centrally located place. We are close to restaurants, shopping, Hawaiian Falls, Top Golf, & more! Golf courses & tennis are close by! Pool is serviced twice a week, so its possibly going to be serviced during your stay. The hot tub is not working. parking for 4 cars',
        price: 234
      },

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
