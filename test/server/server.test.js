const NodeEnvironment = require('jest-environment-node');

// import packages
const request = require('supertest');

// import files
const app = require('../../server/app.js');
const connection = require('../../database/connection.js');
const model = require('../../database/model.js');

const listingId = 1;

// before all
beforeAll(() => {
  // open connection
  return Promise.all([model.Listing.collection.drop(), model.MortgageAd.collection.drop()])
    .then(() => {
      const testListing = new model.Listing(
        {
          _id: listingId,
          price: 100000,
          HOA: 100,
          zip: '94110',
          region: 'SFBayArea',
        },
      );

      const testMortgageAd = new model.MortgageAd(
        {
          _id: 1,
          type: '30 Year Fixed',
          seller: 'First Bank of Fraud',
          NMLS: 65111,
          APR: 5.01,
          interestRate: 5.01,
          minimum: 500000,
          maximum: 500000,
          region: 'SFBayArea',
        },
      );
      return Promise.all([testMortgageAd.save(), testListing.save()]);
    });
});

// afterAll(() => {
//   Promise.all([model.Listing.collection.drop(), model.MortgageAd.collection.drop()])
//     .then(() => connection.closeAsync());
// });

// integration test - get route on a listing

describe('It should properply respond to a get request for a listing', () => {
  test('It should send back listing and relevant mortgage data', () => {
    const path = `/listing${listingId}`;
    return request(app.app).get(path)
      .then((response) => {
        // console.log('response', response.body);
        expect(response.body.listing.zip).toEqual('94110');
        expect(response.body.ads[0].seller).toEqual('First Bank of Fraud');
      });
  });
});
