import React from 'react';
import Styled from 'styled-components';


// Styles
import BankRateCard from './AdStyles/BankRateCard.jsx';
import LenderInfo from './AdStyles/LenderInfo.jsx';
import InterestRate from './AdStyles/InterestRate.jsx';
import Bold from './AdStyles/Bold.jsx';
import Seller from './AdStyles/Seller.jsx';
import APRStyle from './AdStyles/APR.jsx';


const Ad = ({ seller, APR, NMLS, interestRate}) => (
  <BankRateCard>
    <LenderInfo>
      <div>
        <InterestRate>
          <Bold>{interestRate}</Bold>
          %
        </InterestRate>
        Interest Rate
      </div>
      <div>
        <APRStyle>
          <Bold>{APR}</Bold>
          %
        </APRStyle>
        {`APR as of ${`${new Date().getMonth() + 1}/${new Date().getDate()}`}`}
      </div>
      <div id='NMLS'>
        <Seller><Bold>{seller}</Bold></Seller>
        {`NMLS #  ${NMLS}`}
      </div>
    </LenderInfo>
  </BankRateCard>
);


export default Ad;
