import React from 'react';
import ReactDOM from 'react-dom';
//import Main from '../../client/index.jsx';

describe("Index", () => {
  it ('should be true', () => {
    const foo = true;
    expect(foo).toBe(true);
  })
  it ('should be false', () => {
    const foo = false;
    expect(foo).toBe(false);
  })
})