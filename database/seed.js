const schema = require('./index.js');

const randomType = () => {
  let types = ['5/1 Arm', '30 Year Fixed', '15 Year Fixed'];
  let index = Math.floor(Math.random() * 3);
  return types[index]
}

const randomSeller = () => {
  let banks = [['Aurora Financial, LLC', 6606],
    ['NBKC Bank', 6706],
    ['Sebonic Financial', 23606],
    ['Homeplus Corporation', 34567],
    ['New American Funding', 6606],
    ['BNC National Bank', 418467]]

  let index = Math.floor(Math.random() * 6);
  return banks[index];
}

const randomRate = () => {
  return (Math.random() * 2 + 3).toFixed(2);
}

const randomPrice = () => {
  return (Math.random() * 2500000 + 100000)
}

const randomMinimum = () => {
  return Math.max(Math.floor(Math.random() * 500000) - 200000, 0 );
}

const randomMaximum = () => {
  if (Math.random() > 0.9) {
    return null;
  } else {
    return Math.floor(Math.random() * 500000) + 500000;
  }
}

const randomRegion = () => {
  let regions = ['HoustonMetro', 'BayMetro', 'NewYorkMetro', 'SeatleMetro', 'OmahaMetro'];
  let index = Math.floor(Math.random() * 5);
  return
}

const randomZip = () => {
  let randomDigit = () => Math.floor(Math.random() * 10).toString();
  let zip = '';
  for (var i = 0; i < 5; i++) {
    zip += randomDigit();
  }
  return zip
}

const randomHOA = () => {
  if (Math.random() > 0.5) {
    return 0;
  }
  return Math.floor(Math.random() * 900 + 100)
};

let listing = new schema.Listing(
  {
    price: randomPrice(),
    HOA: randomHOA(),
    zip: randomZip(),
    region: randomRegion(),
  }
);

let bank = randomSeller()
let MortgageAd = new schema.MortgageAd(
  {
    type: randomType(),
    seller: bank[0],
    NMLS: bank[1],
    APR: randomRate(),
    interestRate: randomRate(),
    minimum: randomMinimum(),
    maximum: randomMaximum(),
    region: randomRegion(),
  }
)
console.log("Listing:", listing);
console.log("MortgageAd:", MortgageAd);

