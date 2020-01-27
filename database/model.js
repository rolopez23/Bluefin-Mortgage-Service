
const mongoose = require('mongoose');

const { Schema } = mongoose;

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

const MortgageAd = mongoose.model('MortgageAd', mortgageAdSchema);
// Returns one listing based on an Id
const getListing = (listing) => Listing.findById(listing);


const getRelevantAdds = (region) => MortgageAd.find({ 'region': region });


module.exports = {
  Listing,
  MortgageAd,
  getListing,
  getRelevantAdds,
};
