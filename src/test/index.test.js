/**
 * @jest-environment jsdom
 */



import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Enzyme, { shallow, render, mount } from 'enzyme';
import Index from '../client/index.jsx';

it('Testing to see if Jest works', () => {
  expect(1).toBe(1)
})



//test to make sure the songs array in state has 5 songs

//test to make sure the render is not happening if the songs array is still empty
