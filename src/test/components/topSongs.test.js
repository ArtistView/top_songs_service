const props = {
  songs: [
    {
        "_id": "5eebfe07a386ca12ede16e57",
        "featuredArtists": [],
        "title": "montes, nascetur ridiculus mus.",
        "duration": 167,
        "listens": 4959322,
        "explicit": false,
        "mp3": "https://song-for-fake-spotify.s3-us-west-1.amazonaws.com/Jason_Shaw_-_RUNNING_WATERS.mp3",
        "artistId": "5eebe7b2c451ef0e3f4c0503",
        "albumId": "5eebecb1969c0a0fa4e0ce6e",
        "__v": 0,
        "image": "https://tinyurl.com/y922ywyh"
    },
    {
        "_id": "5eebfe07a386ca12ede16ed6",
        "featuredArtists": [],
        "title": "Morbi non",
        "duration": 235,
        "listens": 4950205,
        "explicit": true,
        "mp3": "https://song-for-fake-spotify.s3-us-west-1.amazonaws.com/Broke_For_Free_-_01_-_As_Colorful_As_Ever+(1).mp3",
        "artistId": "5eebe7b2c451ef0e3f4c0546",
        "albumId": "5eebecb1969c0a0fa4e0ce86",
        "__v": 0,
        "image": "https://tinyurl.com/y7jjtjob"
    },
    {
        "_id": "5eebfe07a386ca12ede16e66",
        "featuredArtists": [],
        "title": "vel, venenatis",
        "duration": 171,
        "listens": 4948550,
        "explicit": false,
        "mp3": "https://song-for-fake-spotify.s3-us-west-1.amazonaws.com/Tours_-_01_-_Enthusiast.mp3",
        "artistId": "5eebe7b2c451ef0e3f4c053b",
        "albumId": "5eebecb1969c0a0fa4e0ce7e",
        "__v": 0,
        "image": "https://tinyurl.com/y7jjtjob"
    },
    {
        "_id": "5eebfe07a386ca12ede16ed3",
        "featuredArtists": [],
        "title": "eget",
        "duration": 171,
        "listens": 4929184,
        "explicit": true,
        "mp3": "https://song-for-fake-spotify.s3-us-west-1.amazonaws.com/Tours_-_01_-_Enthusiast.mp3",
        "artistId": "5eebe7b2c451ef0e3f4c0538",
        "albumId": "5eebecb1969c0a0fa4e0ce8f",
        "__v": 0,
        "image": "https://tinyurl.com/yb46edpn"
    },
    {
        "_id": "5eebfe07a386ca12ede16e68",
        "featuredArtists": [],
        "title": "Duis",
        "duration": 167,
        "listens": 4862831,
        "explicit": false,
        "mp3": "https://song-for-fake-spotify.s3-us-west-1.amazonaws.com/Jason_Shaw_-_RUNNING_WATERS.mp3",
        "artistId": "5eebdbf1bf2d490c13ff868d",
        "albumId": "5eebecb1969c0a0fa4e0ce80",
        "__v": 0,
        "image": "https://tinyurl.com/y8tnz963"
    }
  ]
}

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Enzyme, { shallow, render, mount } from 'enzyme';
import TopSongs from '../../client/components/topSongs.jsx';
//import {fetch} from 'whatwg-fetch';


describe('TopSongs', () => {
  const wrapper = shallow(<TopSongs {...props} />);

  it('TopSongs renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('Receives an array of 5 songs', () => {
    expect(wrapper).props().length.toBe(5)
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