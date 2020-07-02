/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Enzyme, { shallow, render, mount } from 'enzyme';
import App from '../client/app.jsx';

it('Testing to see if Jest works', () => {
  expect(1).toBe(1)
})



//Test to make sure app is rendering to app - shallow test w/ snapshot

//Test to make sure the follow button toggles the state

