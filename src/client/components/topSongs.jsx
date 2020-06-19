import React from 'react';
import Song from './song.jsx';

//takes in an array of songs, maps through them and calls sons for each one
const TopSong = (props) => {
  //console.log('Top songs: ', props.songs)
  return (
    <ul>
      {
        props.songs.map(song => (
          <Song song={song} />
        ))
      }
    </ul>
  )
}


export default TopSong