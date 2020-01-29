import React from 'react';

import Ad from './Ad.jsx';


const AdList = ({ads}) => (
  <div>
    {ads.map((ad) => <Ad />)}
  </div>
);

export default AdList;
