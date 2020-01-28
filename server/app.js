//  import statements
const express = require('express');
const path = require('path');

// file dependencies
const db = require('../database/');
// declare file Path
const filePath = path.join(__dirname, '..', 'public');
// name App
const app = express();

app.use(express.static(filePath));

app.use(express.json());

app.get('/listing:listingId', (req, res) => {
  // Get the id of the item, form req
  const { listingId } = req.params;
  const send = {};
  // Send request for that listing
  db.getListing(listingId)
    .then((data1) => {
      send.listing = data1;
      const { region } = data1;
      // console.log(region);
      return db.getMortgageAds(region);
    })
    .then((data2) => {
      send.ads = data2;
      // console.log(data, send.listing, send.ads);
      res.send(send);
    });
});

app.patch('addClick', (req, res) => {
  // Get the id of the add
  const adId = req.body.id;

  db.getAd(adId)
    .then((ad) => {
      const newClick = ad.click + 1;
    })
  // Increment that add by one

  // Redirect to third party site.
});

module.exports = {
  app,
};
