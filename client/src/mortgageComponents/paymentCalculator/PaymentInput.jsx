/* eslint-disable quotes */
import React, { Component } from 'react';
// import { boundClass } from 'autobind-decorator';

import InputContainer from './paymentStyles/InputContainer.jsx';
import Slider from './paymentStyles/Slider.jsx';
import TextBox from './paymentStyles/TextBox.jsx';

// @boundClass
class PaymentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 200000,
      downPayment: 60000,
      percentDownPayment: 30,
      min: 50000,
      max: 150000,
      editingPrice: false,
      editingDP: false,
      editingPercent: false,
    };

    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handlePercentChange = this.handlePercentChange.bind(this);
    this.handleDPChange = this.handleDPChange.bind(this);
    this.toggleEditingPrice = this.toggleEditingPrice.bind(this);
    this.toggleEditingDP = this.toggleEditingDP.bind(this);
    this.toggleEditingPercent = this.toggleEditingPercent.bind(this);
  }
  // Limits updating to when nothing is being edited
  // shouldComponentUpdate() {
  //   const { editingPrice, editingDP, editingPercent } = this.state;
  //   if (editingPrice || editingDP || editingPercent) {
  //     return false
  //   }
  //   return true;
  // }

  // Price changes cause the down payment to move
  handlePriceChange(event) {
    const { percentDownPayment } = this.state;
    const newPrice = event.target.value;
    const newDownPayment = (percentDownPayment / 100) * newPrice;
    this.setState({
      [event.target.name]: newPrice,
      downPayment: newDownPayment,
    });
    // console.log(this.state);
  }

  // Down Payment Changes re-redner the percent
  handleDPChange(event) {
    const { price } = this.state;
    const newDownPayment = event.target.value;
    const percent = (newDownPayment / price) * 100;
    // Validation for values
    this.setState({
      [event.target.name]: newDownPayment,
      percentDownPayment: percent,
    });
    // console.log(this.state);
  }

  handlePercentChange(event) {
    const { price } = this.state;
    const percent = event.target.value / 100;
    const newDownPayment = Math.round(percent * price);
    this.setState({
      percentDownPayment: event.target.value,
      downPayment: newDownPayment,
    });
  }

  dollarFormat(number) {
    const formatter = new Intl.NumberFormat(("en-US"), {
      style: 'decimal',
      currency: 'USD',
      maximumFractionDigits: 0,
    });
    return formatter.format(Math.round(number));
  }

  toggleEditingPrice() {
    const { editingPrice } = this.state;
    this.setState({ editingPrice: !editingPrice });
  }

  toggleEditingDP() {
    const { editingDP } = this.state;
    this.setState({ editingDP: !editingDP });
  }

  toggleEditingPercent() {
    const { editingPercent } = this.state;
    this.setState({ editingPercent: !editingPercent });
  }


  render() {
    const {
      price, downPayment, min, max, editingPrice, editingDP, editingPercent, percentDownPayment,
    } = this.state;
    return (
      <InputContainer>
        <div>Home Price</div>
        <div>Down Payment</div>
        <div id="PriceTextContainer">
          {editingPrice ? (
            <TextBox
              id="priceEdit"
              name="price"
              type="number"
              width="100%"
              onChange={this.handlePriceChange}
              onBlur={this.toggleEditingPrice}
              value={price}
            />
          ) : (
            <TextBox
              id="priceValue"
              name="price"
              type="text"
              width="100%"
              onFocus={this.toggleEditingPrice}
              value={`$ ${this.dollarFormat(price)}`}
              readOnly
            />
          )}
        </div>
        <div id="DownPaymentTextContainer">
          {editingDP ? (
            <TextBox
              id="DPEdit"
              name="downPayment"
              type="number"
              width="65%"
              onChange={this.handleDPChange}
              onBlur={this.toggleEditingDP}
              value={downPayment}
            />
          ) : (
            <TextBox
              id="DPValue"
              name="downPayment"
              type="text"
              width="65%"
              onFocus={this.toggleEditingDP}
              value={`$ ${this.dollarFormat(downPayment)}`}
              readOnly
            />
          )}
          {editingPercent ? (
            <TextBox
              id="percentEdit"
              name="percentDownPayment"
              type="number"
              width="32%"
              onChange={this.handlePercentChange}
              onBlur={this.toggleEditingPercent}
              value={percentDownPayment}
            />
          ) : (
            <TextBox
              id="percentValue"
              name="percentDownPayment"
              type="text"
              width="32%"
              onFocus={this.toggleEditingPercent}
              value={`${percentDownPayment} %`}
              readOnly
            />
          )}
        </div>
        <div>
          <Slider
            name="price"
            onChange={this.handlePriceChange}
            type="range"
            value={price}
            min={min}
            max={max}
          />
        </div>
        <div>
          <Slider
            name="percent"
            type="range"
            value={percentDownPayment}
            min="0"
            max="100"
            onChange={this.handlePercentChange}
          />
        </div>
      </InputContainer>
    );
  }
}

export default PaymentInput;
