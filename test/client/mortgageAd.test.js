import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import MortgageAd from '../../client/src/mortgageComponents/MortgageAd.jsx';

const testMortgageAd = {
  _id: 1,
  type: '30 Year Fixed',
  seller: 'First Bank of Fraud',
  NMLS: 65111,
  APR: 5.01,
  interestRate: 5.01,
  minimum: 500000,
  maximum: 500000,
  region: 'SFBayArea',
};

const wrapper = Enzyme.shallow(<MortgageAd />);

describe('Motgage Ad Test', () => {
  test('Contains Right Fields, APR, InterestRate, Seller', () => {
    expect(wrapper.find('div')).toExist();
  });
});
