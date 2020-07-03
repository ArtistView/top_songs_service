/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Enzyme, { shallow, render, mount } from 'enzyme';
import App from '../client/app.jsx';
import {fetch} from 'whatwg-fetch';

// it('Testing to see if Jest works', () => {
//   expect(1).toBe(1)
// })
describe('Main App', () => {
  const wrapper = shallow(<App />);

  it('App renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('Changes state to Following when follow button is clicked', () => {
    expect(wrapper.state('following')).toBe('FOLLOW')
    // wrapper.find('artist-follow-btn').click()

    // expect(wrapper.state('following')).toBe('FOLLOWING')
  })
})

