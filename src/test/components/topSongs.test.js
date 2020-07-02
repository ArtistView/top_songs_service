import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Enzyme, { shallow, render, mount } from 'enzyme';
import TopSongs from '../../client/components/topSongs.jsx';
//import {fetch} from 'whatwg-fetch';

describe('TopSongs', () => {
  const wrapper = shallow(<TopSongs />);

  it('TopSongs renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('Receives an array of 5 songs', () => {
    expect(wrapper).props(songs).length.toBe(5)
  })
})

//test audio list has 5 songs

//test first song is the first song in list

//test that on click the selectedsong updates

//test that when playsong is called:
  //the playing song updates
  //song is paused if false
  //audioFile is updated
  //audioIndex is updated

//test that when pause song is called:
  //song is paused is true
  //audio index doesn't change