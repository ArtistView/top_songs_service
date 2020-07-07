/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Enzyme, { shallow, render, mount } from 'enzyme';
import TopFive from '../client/index.jsx';
import {fetch} from 'whatwg-fetch';

describe('TopFive', () => {
  const wrapper = shallow(<TopFive />);

  it('Index renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('Has an array in the state', () => {
    expect(Array.isArray(wrapper.state('songs'))).toBe(true)
  })
})

