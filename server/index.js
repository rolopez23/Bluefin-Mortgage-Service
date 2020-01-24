//  import statements
const express = require('express');
// const path = require('path');

const filePath = '/Users/robertlopez/Desktop/Bluefin-Mortgage-Service/public';
const port = 4003;
const app = express();

app.use(express.static(filePath));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Morgage sub-App is lisenting on port ${port}`);
});
