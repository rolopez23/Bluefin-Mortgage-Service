/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import PaymentContainer from './paymentStyles/PaymentContainer.jsx';
import PaymentInput from './PaymentInput.jsx';


const PaymentCalculator = ({ updatePrice, price, downPayment }) => {
  // console.log(price, downPayment);
  return (
    <PaymentContainer>
      <div>Header Area</div>
      <div>Payment Bar</div>
      <div>Legend</div>
      <PaymentInput
        price={price}
        updatePrice={updatePrice}
        downPayment={downPayment}
      />
    </PaymentContainer>
  );
};


export default PaymentCalculator;
