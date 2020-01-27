/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../client/src/mortgageComponents/App.jsx';


describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});


describe('App', () => {
  test('App exists', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
