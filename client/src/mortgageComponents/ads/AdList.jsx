import React from 'react';

import Ad from './Ad.jsx';


const AdList = ({ ads }) => (
  <div>
    {ads.map((ad) => (
      <Ad
        key={ad._id}
        seller={ad.seller}
        NMLS={ad.NMLS}
        APR={ad.APR}
        interestRate={ad.interestRate}
      />
    ))}
  </div>
);

export default AdList;
