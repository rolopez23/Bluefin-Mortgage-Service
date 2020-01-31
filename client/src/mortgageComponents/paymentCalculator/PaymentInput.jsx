import React, { Component } from 'react';

import InputContainer from './paymentStyles/InputContainer.jsx';
import Slider from './paymentStyles/Slider.jsx';
import TextBox from './paymentStyles/TextBox.jsx';

class PaymentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 100000,
      downPayment: 20000,
      min: 50000,
      max: 150000,
      editing: false,
    };
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handlePercentChange = this.handlePercentChange.bind(this);
    this.handleDPChange = this.handleDPChange.bind(this);
  }

  //for Text Boxes - not % down payment
  handlePriceChange(event) {
    const { max, min } = this.state;
    let value = parseInt(event.target.value);
    // Validation for values
    this.setState({
      [event.target.name]: value,
    })
    console.log(this.state);
  }

  handleDPChange(event) {
    const { price } = this.state
    let value = event.target.value;
    // Validation for values
    value = Math.min(value, price);
    value = Math.max(value, 0);
    this.setState({
      [event.target.name]: event.target.value,
    })
    console.log(this.state);
  }

  handlePercentChange(event) {
    const { price } = this.state;
    let percent = event.target.value / 100;
    const newDownPayment = Math.round(percent * price);
    this.setState({
      downPayment: newDownPayment,
    })
    console.log(this.state);
  }

  render() {
    const { price, downPayment, min, max } = this.state;
    return (
      <InputContainer>
        <div>Home Price</div>
        <div>Down Payment</div>
        <div>
          <TextBox
          name="price"
          type="number"
          width="100%"
          onChange={this.handlePriceChange}
          value={price} />
        </div>
        <div>
          <TextBox
            name="downPayment"
            type="number"
            min="0"
            max={price}
            width="65%"
            value={downPayment}
            onChange={this.handleDPChange}/>
          <TextBox
            name="percentDownPayment"
            width="32%"
            onChange={this.handlePercentChange}
            value={Math.round(downPayment/price * 100)} />
        </div>
        <div>
          <Slider
            name="price"
            onChange={this.handleDPChange}
            type="range"
            value={price}
            min={min}
            max={max}/>
        </div>
        <div>
          <Slider
            name="percent"
            type="range"
            value={downPayment/price * 100}
            min="0"
            max="100"
            onChange={this.handlePercentChange}/>
        </div>
      </InputContainer>
    );
  }
}

export default PaymentInput;
