/**
 * @jest-environment jsdom
 */



import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Enzyme, { shallow, render, mount } from 'enzyme';
import Index from '../client/index.jsx';

//testing to make sure the popular heading is listed
describe("Index", () => {
  test('Main component renders', () => {
    const wrapper = shallow(<TopFiveSongs />)
    expect(wrapper.find('h3').text()).toContain("Popular")
  });

})

//test to make sure the songs array in state has 5 songs

//test to make sure the render is not happening if the songs array is still empty
