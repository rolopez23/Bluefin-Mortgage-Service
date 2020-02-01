/* eslint-disable import/extensions */
import React from 'react';
import PaymentContainer from './paymentStyles/PaymentContainer.jsx';
import PaymentInput from './PaymentInput.jsx';

const PaymentCalculator = () => (
  <PaymentContainer>
    <div>Header Area</div>
    <div>Payment Bar</div>
    <div>Legend</div>
    <PaymentInput />
  </PaymentContainer>
);


export default PaymentCalculator;
