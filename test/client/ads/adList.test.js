import React from 'react';
import Enzyme, { mount } from 'enzyme';
import AdList from '../../../client/src/mortgageComponents/ads/AdList.jsx';


describe('Ad List', () => {
  test('Renders the correct length', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = mount(<AdList ads={[1]}/>);
    expect(wrapper).toContainMatchingElements(1, 'Ad');

    wrapper.setProps({ ads: [1, 2, 3, 4, 5] });
    expect(wrapper).toContainMatchingElements(5, 'Ad');
  });


});
