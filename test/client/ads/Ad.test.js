import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Ad from '../../../client/src/mortgageComponents/ads/Ad.jsx';

describe('Ad', () => {
  test('Renders Card Styling', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = mount(<Ad />);
    expect(wrapper).toContainMatchingElements(1, 'BankRateCard');
  });
});