/* eslint-disable react/prop-types */
import React from 'react';

import Ad from './Ad.jsx';
import Slider from './slider/Slider.jsx';
import SliderBox from './slider/SliderBox.jsx';
import LoanInput from './input/LoanInput.jsx';


// @autobind
class AdList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanType: '30 Year Fixed',
    };
    this.cardClick = this.cardClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }


  cardClick(card) {
    // console.log(card);
    this.setState({
      selectedCard: card,
    });
  }

  handleSelect(select) {
    // console.log(select);
    this.setState({
      loanType: select,
    });
  }

  sendInfo() {
    console.log('sending information')
  }

  render() {
    const { ads } = this.props;
    const { loanType, selectedCard } = this.state;
    const renderLoans = ads.filter((ad) => (ad.type === loanType));
    return (
      <div>
        <div>Today's Rates for this home</div>
        <LoanInput select={this.handleSelect.bind(this)}/>
        <Slider>
          {renderLoans.map((ad) => (
            <SliderBox>
              <Ad
                id={ad._id}
                seller={ad.seller}
                NMLS={ad.NMLS}
                APR={ad.APR}
                interestRate={ad.interestRate}
                selectedCard={selectedCard}
                click={this.cardClick}
                send={this.sendInfo}
              />
            </SliderBox>
          ))}
        </Slider>
      </div>
    );
  }
}


export default AdList;
