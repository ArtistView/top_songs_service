/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, render, mount } from 'enzyme';

import {fetch} from 'whatwg-fetch';
import Song from '../../client/components/song.jsx';

it('Testing to see if Jest works', () => {
  expect(1).toBe(1)
})

// describe('Song', () => {
//   const wrapper = shallow(<Song />);

//   it('Songs renders correctly', () => {
//     expect(wrapper).toMatchSnapshot();
//   })
// })

