import React from 'react';
import { RiMusicLine } from 'react-icons/ri';
import { RiVolumeUpLine } from 'react-icons/ri';
import { BsPlayFill } from 'react-icons/bs';
import { BsPause } from 'react-icons/bs';
//Takes in a song object, and renders all components of that song

const Song = (props) => {
  console.log(props)
  var song = props.song

  //calculate the duration (database stores as seconds)
  var seconds = (song.duration) % 60
  if (seconds < 10) { seconds = '0' + seconds }
  var minutes = Math.floor(song.duration / 60)
  let duration = minutes + ":" + seconds;


  //if this is the playing song
  if (song._id === props.playingSong) {
    //if this song is selected
    if (props.hover || song._id === props.selectedSong) {
      //playing, selected, song is not paused
      //on click, pause the song
      //icon is pause
      if (!props.songIsPaused) {
        return (
          <li className="song songSelected notPaused songPlaying">
            <span>
              <a className="icon"
              onClick={((e) => props.pauseSong(e, song._id))}>
                <BsPause /></a>
              <div className="songImage"> IMG </div>
              <div className="songTitle">
                {props.song.title}</div>
              <div className="showOptions" onClick={props.showOptions}>...</div>
              <div className="duration">{duration}</div>
            </span>
          </li>
        )
      }
      //playing, selected, song is paused
      //on click, play song
      //icon is play button
      if (props.songIsPaused) {
        return (
          <li className="song songSelected paused songPlaying">
            <span>
              <a className="icon"
                onClick={((e) => props.playSong(e, song._id))}>
                <BsPlayFill /></a>
              <div className="songImage"> IMG </div>
              <div className="songTitle">
                {props.song.title}</div>
              <div className="showOptions" onClick={props.showOptions}>...</div>
              <div className="duration">{duration}</div>
            </span>
          </li>
        )
      }
    }
    //if playing, not selected, not paused
    //on click, pause song
    //icon is the speaker/volume button
    if (!props.songIsPaused) {
      return (
        <li className="song notPaused songPlaying">
          <span>
            <a className="icon"
              onClick={((e) => props.pauseSong(e, song._id))}>
              <RiVolumeUpLine /></a>
            <div className="songImage"> IMG </div>
            <div className="songTitle">
              {props.song.title}</div>
            <div className="duration">{duration}</div>
          </span>
        </li>
      )
    } else {
      //if not selected, this song is playing, but song is paused
      //on click, play the song
      //icon is music note
      return (
        <li className="song paused songPlaying">
          <span>
            <a className="icon"
              onClick={((e) => props.playSong(e, song._id))}>
              <RiMusicLine /></a>
            <div className="songImage"> IMG </div>
            <div className="songTitle">
              {props.song.title}</div>
            <div className="duration">{duration}</div>
          </span>
        </li>
      )
    }
  } else if (song._id !== props.playingSong) {
    //if song is not playing

    //not playing, song is selected
    //on click play the song
    //icon is play button
    if (props.hover || song._id === props.selectedSong) {
      return (
        <li className="song songSelected normalSong">
          <span>
            <a className="icon"
              onClick={((e) => props.playSong(e, song._id))}>
              <BsPlayFill /></a>
            <div className="songImage"> IMG </div>
            <div className="songTitle">
              {props.song.title}</div>
            <div className="showOptions" onClick={props.showOptions}>...</div>
            <div className="duration">{duration}</div>
          </span>
        </li>
      )
    }
    //not playing, not selected, all else
    //on click, play song
    //icon is music note
    return (
      <li className="song normalSong">
        <span>
          <a className="icon"
            onClick={((e) => props.playSong(e, song._id))}>
            <RiMusicLine /></a>
          <div className="songImage"> IMG </div>
          <div className="songTitle">
            {props.song.title}</div>
          <div className="duration">{duration}</div>
        </span>
      </li>
    )
  }

}


export default Song