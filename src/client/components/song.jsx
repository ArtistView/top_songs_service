import React from 'react';
import { RiMusicLine } from 'react-icons/ri';
import { RiVolumeUpLine } from 'react-icons/ri';
import { BsPlayFill } from 'react-icons/bs';
import { BsPause } from 'react-icons/bs';
//Takes in a song object, and renders all components of that song

const Song = (props) => {
  //console.log(props)
  var song = props.song

  //rewrite these if statements. Find a way to clean them up

  //if this is the playing song, and it's unpaused
  if (props.songIsPlaying && !props.songIsPaused && song._id === props.playingSong) {
    return (
      <div className="songSelected">
        <span>
          <a onClick={props.playSong}>
            <RiVolumeUpLine /></a>
          {props.song.title}
        </span>
      </div>
    )
  } else if (!props.songIsSelected && !props.songIsPlaying) {
    //if no song is selected and no song is playing
    return (
      <div>
        <span><RiMusicLine />{props.song.title}</span>
      </div>
    )
  } else if (props.songIsSelected && props.selectedSong === song._id) {
    return (
      <div>
        <span><BsPlayFill />{props.song.title}</span>
      </div>
    )
  }
  return (
    <div>
      <span><RiMusicLine />{props.song.title}</span>
    </div>
  )


}


export default Song