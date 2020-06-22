import React from 'react';
import { RiMusicLine } from 'react-icons/ri';
import { RiVolumeUpLine } from 'react-icons/ri';
import { BsPlayFill } from 'react-icons/bs';
import { BsPause } from 'react-icons/bs';
//Takes in a song object, and renders all components of that song

const Song = (props) => {
  //console.log(props)
  var song = props.song

  //if this is the playing song
  if (song._id === props.playingSong) {
    //if this song is selected
    if (song._id === props.selectedSong) {
      //playing, selected, song is not paused
      //on click, pause the song
      //icon is pause
      if (!props.songIsPaused) {
        return (
          <div className="songSelected notPaused songPlaying">
            <span>
              <a onClick={((e) => props.pauseSong(e, song._id))}>
                <BsPause /></a>
              {props.song.title}
            </span>
          </div>
        )
      }
      //playing, selected, song is paused
      //on click, play song
      //icon is play button
      if (props.songIsPaused) {
        return (
          <div className="songSelected paused songPlaying">
            <span>
            <a onClick={((e) => props.playSong(e, song._id))}>
                <BsPlayFill /></a>
              {props.song.title}
            </span>
          </div>
        )
      }
    }
    //if playing, not selected, not paused
    //on click, pause song
    //icon is the speaker/volume button
    if (!props.songIsPaused) {
      return (
        <div className="notPaused songPlaying">
          <span>
          <a onClick={((e) => props.pauseSong(e, song._id))}>
              <RiVolumeUpLine /></a>
            {props.song.title}
          </span>
        </div>
      )
    } else {
    //if not selected, this song is playing, but song is paused
    //on click, play the song
    //icon is music note
      return (
        <div className="songSelected paused songPlaying">
          <span>
          <a onClick={((e) => props.playSong(e, song._id))}>
              <RiMusicLine /></a>
            {props.song.title}
          </span>
        </div>
      )
    }
  } else if (song._id !== props.playingSong) {
    //if song is not playing

    //not playing, song is selected
    //on click play the song
    //icon is play button
    if (song._id === props.selectedSong) {
      return (
        <div className="songSelected normalSong">
          <span>
          <a onClick={((e) => props.playSong(e, song._id))}>
              <BsPlayFill /></a>
            {props.song.title}
          </span>
        </div>
      )
    }
    //not playing, not selected, all else
    //on click, play song
    //icon is music note
    return (
      <div className="normalSong">
        <span>
        <a onClick={((e) => props.playSong(e, song._id))}>
            <RiMusicLine /></a>
          {props.song.title}
        </span>
      </div>
    )
  }

}


export default Song