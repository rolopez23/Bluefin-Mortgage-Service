/* eslint-disable react/prop-types */
import React from 'react';

import Ad from './Ad.jsx';
import Slider from './slider/Slider.jsx';
import SliderBox from './slider/SliderBox.jsx';


// @autobind
class AdList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null,
    };
    this.cardClick = this.cardClick.bind(this);
  }

  cardClick(card) {
    // console.log(card);
    this.setState({
      selectedCard: card,
    });
  }

  render() {
    const { selectedCard } = this.state;
    const { ads } = this.props;
    return (
      <Slider>
        {ads.map((ad) => (
          <SliderBox>
            <Ad
              id={ad._id}
              seller={ad.seller}
              NMLS={ad.NMLS}
              APR={ad.APR}
              interestRate={ad.interestRate}
              selectedCard={selectedCard}
              click={this.cardClick}
            />
          </SliderBox>
        ))}
      </Slider>
    );
  }
}


export default AdList;
