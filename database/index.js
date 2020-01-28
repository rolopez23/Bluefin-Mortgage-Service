const connection = require('./connection.js');
const model = require('./model.js');


const getListing = (id) => model.getListing(id);
// this is currently called when a connection is open
const getMortgageAds = (region) => model.getRelevantAds(region);

const getAd = (id) => model.getAd(id);

module.exports = {
  getListing,
  getMortgageAds,
  getAd,
};
