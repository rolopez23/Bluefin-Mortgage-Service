import React from 'react';
import Ad from './Ad.jsx';

const AdList = (props) => (
  <div>
    {props.ads.map((ad) => <Ad />)}
  </div>
);

export default AdList;
