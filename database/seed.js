const schema = require('./index.js');

// drop collections

const randomType = () => {
  const types = ['5/1 Arm', '30 Year Fixed', '15 Year Fixed'];
  const index = Math.floor(Math.random() * 3);
  return types[index];
};

const randomSeller = () => {
  const banks = [['Aurora Financial, LLC', 6606],
    ['NBKC Bank', 6706],
    ['Sebonic Financial', 23606],
    ['Homeplus Corporation', 34567],
    ['New American Funding', 6606],
    ['BNC National Bank', 418467]]

  const index = Math.floor(Math.random() * 6);
  return banks[index];
};

const randomRate = () => (Math.random() * 2 + 3).toFixed(2);


const randomPrice = () => Math.floor((Math.random() * 2500000 + 100000));


const randomMinimum = () => Math.max(Math.floor(Math.random() * 500000) - 200000, 0);


const randomMaximum = () => {
  if (Math.random() > 0.9) {
    return null;
  }
  return Math.floor(Math.random() * 500000) + 500000;
};

const randomRegion = () => {
  const regions = ['HoustonMetro', 'BayMetro', 'NewYorkMetro', 'SeattleMetro', 'OmahaMetro'];
  const index = Math.floor(Math.random() * 5);
  return regions[index];
};

const randomZip = () => {
  const randomDigit = () => Math.floor(Math.random() * 10).toString();
  let zip = '';
  for (let i = 0; i < 5; i += 1) {
    zip += randomDigit();
  }
  return zip;
};

const randomHOA = () => {
  if (Math.random() > 0.5) {
    return 0;
  }
  return Math.floor(Math.random() * 900 + 100)
};
for (let i = 0; i < 100; i += 1) {
  const listing = new schema.Listing(
    {
      price: randomPrice(),
      HOA: randomHOA(),
      zip: randomZip(),
      region: randomRegion(),
    },
  );

  const bank = randomSeller();
  const mortgageAd = new schema.MortgageAd(
    {
      type: randomType(),
      seller: bank[0],
      NMLS: bank[1],
      APR: randomRate(),
      interestRate: randomRate(),
      minimum: randomMinimum(),
      maximum: randomMaximum(),
      region: randomRegion(),
    },
  );
  listing.save();
  mortgageAd.save();
}
// console.log("Listing:", listing);
// console.log("MortgageAd:", MortgageAd);
