import React from 'react';

import Ad from './Ad.jsx';
import Slider from './slider/Slider.jsx';
import SliderBox from './slider/SliderBox.jsx';
import LoanInput from './input/LoanInput.jsx';


class AdList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanType: '30 Year Fixed',
    };
  }

  handleSelect(select) {
    // console.log(select);
    this.setState({
      loanType: select,
    })
  }

  render() {
    const { ads } = this.props;
    const { loanType } = this.state;
    const renderLoans = ads.filter((ad) => (ad.type === loanType));
    return (
      <div>
        <div>Today's Rates for this home</div>
        <LoanInput select={this.handleSelect.bind(this)}/>
        <Slider>
          {renderLoans.map((ad) => (
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
      </div>
    );
  }
}


export default AdList;
