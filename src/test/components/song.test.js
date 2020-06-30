/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { mount } from 'enzyme';
import Song from '../../client/components/song.jsx';

//test that on mouse enter toggleHover gets called
test('Song is toggled to hover when mouse enters component', () => {
  const component = renderer.create(
    <Song page="localhost:3000">Spotify</Song>,
  );
  let song = component.toJSON();
  expect(song).toMatchSnapshot();

  song.props.onMouseEnter();

  song = component.toJSON();
  expect(song).toMatchSnapshot();

  song.props.onMouseLeave();

  song = component.toJSON();
  expect(song).toMatchSnapshot();
})

//test that clicking the icon plays or pauses the song

//test that clicking on the image plays or pauses the song

//test that when the song ends, the next song is played

//test that when the last song ends, no songs is played

//test that the ellipsis is shown on hover or on select, but not otherwise

//test that when the ellipsis is clicked the menu opens