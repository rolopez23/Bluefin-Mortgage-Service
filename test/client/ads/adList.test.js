import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import AdList from '../../../client/src/mortgageComponents/ads/AdList.jsx';


describe('Ad List', () => {
  test('Renders the correct length', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = mount(<AdList ads={[1]}/>);
    expect(wrapper).toContainMatchingElements(1, 'Ad');

    wrapper.setProps({ ads: [1, 2, 3, 4, 5] });
    expect(wrapper).toContainMatchingElements(5, 'Ad');
  });

  test('Sliding flexbox exists', ()=> {
    const wrapper = shallow(<AdList ads={[1, 2, 3]}/>);
    expect(wrapper).toContainMatchingElements(1, 'Slider');
    expect(wrapper).toContainMatchingElements(3, 'SliderBox');
  });
});
