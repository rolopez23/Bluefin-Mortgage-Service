import React from 'react';

import Ad from './Ad.jsx';
import Slider from './slider/Slider.jsx';
import SliderBox from './slider/SliderBox.jsx';


class AdList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      renderIndex: 0,
    };
  }

  createRenderArray() {
    
  }

  render() {
    return (
      <Slider>
        {this.props.ads.map((ad) => (
          <SliderBox>
            <Ad
              key={ad._id}
              seller={ad.seller}
              NMLS={ad.NMLS}
              APR={ad.APR}
              interestRate={ad.interestRate}
            />
          </SliderBox>
        ))}
      </Slider>
    );
  }
}


export default AdList;
