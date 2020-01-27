// import packages
const supertest = require('supertest');

// import files
const app = require('../server/app.js');
const connection = require('../database/connection.js');
const model = require('../database/model.js');


// before all
beforeAll(() => {
  // open connection
  connection.openAsync()
    .then(() => Promise.all([model.Listing.drop(), model.MortgageAd.drop()]))
    .then(() => {
      const testListing = new model.Listing(
        {
          _id: 1,
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
      return Promise.all([testListing.save(), testMortgageAd.save()]);
    })
    .then(() => connection.closeAsync());
});

afterAll(() => {
  connection.openAsync()
    .then(() => Promise.all([model.Listing.drop(), model.MortgageAd.drop()]))
    .then(() => connection.closeAsync());
});

// integration test - get route on a listing

describe('It should properply respond to a get request for a listing', () => {
  
})