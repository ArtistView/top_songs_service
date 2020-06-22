import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Enzyme, { shallow, render, mount } from 'enzyme';
import Index from '../client/index.jsx';

describe("Index", () => {
  test('Main component renders', () => {
    const wrapper = shallow(<TopFiveSongs />)
    expect(wrapper.find('h3').text()).toContain("Popular")
  });

})