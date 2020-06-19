import React from 'react';
import Song from './song.jsx';


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