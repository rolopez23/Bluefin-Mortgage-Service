const mongoose = require('mongoose');

const { Schema } = mongoose;


mongoose.connect('mongodb://localhost:27017/mortgages', { useNewUrlParser: true });

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
});

const mortgageAdSchema = new Schema({
  type: { type: String, enum: ['5/1 Arm', '30 Year Fixed', '15 Year Fixed'] },
  seller: String,
  NMLS: Number,
  APR: Number,
  interestRate: Number,
  minimum: Number,
  maximum: Number,
  clicks: { type: Number, default: 0 },
  region: String,
});

const listingSchema = new Schema({
  price: Number,
  region: String,
  HOA: { type: Number, default: 0 },
  zip: String,
});

const Listing = mongoose.model('Listing', listingSchema);

const MortgageAd = mongoose.model('Mortgage Ad', mortgageAdSchema);
// Returns one listing based on an Id
const getListing = (listing) => {

};

const getRelevantAdds = (region) => {

};

module.exports = {
  Listing,
  MortgageAd,
  getListing,
  getRelevantAdds
};
