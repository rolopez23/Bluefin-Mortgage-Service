const mongoose = require('mongoose');

var Schema = mongoose.Schema;

//The Schema sets maxim
const mortgageAdSchema = new Schema({
  type: {type: String, enum: ['5/1 Arm', '30 Year Fixed', '15 Year Fixed']},
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
  HOA: {type: Number, default: 0},
  zip: String,
});

let Listing = mongoose.model('Listing', listingSchema);

let MortgageAd = mongoose.model('Mortgage Ad', mortgageAdSchema);

module.exports = {
  Listing,
  MortgageAd,
}