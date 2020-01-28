
const mongoose = require('mongoose');

const { Schema } = mongoose;

const mortgageAdSchema = new Schema({
  _id: Number,
  type: { type: String, enum: ['5/1 Arm', '30 Year Fixed', '15 Year Fixed'] },
  seller: String,
  NMLS: Number,
  APR: Number,
  interestRate: Number,
  minimum: Number,
  maximum: Number,
  clicks: { type: Number, default: 0 },
  region: String,
}, { _id: false });

const listingSchema = new Schema({
  _id: Number,
  price: Number,
  region: String,
  HOA: { type: Number, default: 0 },
  zip: String,
}, { _id: false });

const Listing = mongoose.model('Listing', listingSchema);

const MortgageAd = mongoose.model('MortgageAd', mortgageAdSchema);
// Returns one listing based on an Id

const getListing = (listing) => Listing.findById(listing);

// only used for testing
const getAd = (ad) => MortgageAd.findById(ad);


// eslint-disable-next-line quote-props
const getRelevantAds = (region) => MortgageAd.find({ 'region': region });


module.exports = {
  Listing,
  MortgageAd,
  getListing,
  getRelevantAds,
  getAd,
};
