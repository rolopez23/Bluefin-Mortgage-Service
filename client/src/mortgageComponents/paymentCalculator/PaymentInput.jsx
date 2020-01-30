import React, { Component } from 'react';

import InputContainer from './paymentStyles/InputContainer.jsx';
import Slider from './paymentStyles/Slider.jsx';
import TextBox from './paymentStyles/TextBox.jsx';

class PaymentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 100000,
      //As a percentage of price
      downPayment: 0.20,
    };
  }

  render() {
    const { price, downPayment } = this.state;
    return (
      <InputContainer>
        <div>Home Price</div>
        <div>Down Payment</div>
        <div><TextBox type="text" width="100%" value={price} inputmode="currency" /></div>
        <div>
          <TextBox width="65%" value={downPayment * price} inputmode="currency" />
          <TextBox width="30%" inputmode="percent" value={downPayment} />
        </div>
        <div><Slider type="range" value={price} /></div>
        <div>
          <Slider type="range" value={downPayment} />
        </div>
      </InputContainer>
    );
  }
}

export default PaymentInput;