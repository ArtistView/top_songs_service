import React from 'react';
import { RiMusicLine } from 'react-icons/ri';
import { RiVolumeUpLine } from 'react-icons/ri';
import { BsPlayFill } from 'react-icons/bs';
import { BsPause } from 'react-icons/bs';
//Takes in a song object, and renders all components of that song

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this.toggleHover = this.toggleHover.bind(this);
  }
  //when mouse over, toggle the hover function to rerender state
  toggleHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  //calculte duration in minutes. Database stores in seconds
  duration() {
    var seconds = (this.props.song.duration) % 60
    if (seconds < 10) { seconds = '0' + seconds }
    var minutes = Math.floor(this.props.song.duration / 60)
    let duration = minutes + ":" + seconds;
    return duration
  }

  //conditional rendering based on state of props and this
  render () {
    //if this is the playing song
    if (this.props.song._id === this.props.playingSong) {
      //if this song is selected
      if (this.state.hover || this.props.song._id === this.props.selectedSong) {
        //playing, selected, song is not paused
        //on click, pause the song
        //icon is pause
        if (!this.props.songIsPaused) {
          return (
            <li className="song songSelected notPaused songPlaying">
              <span
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}>
                <a className="icon"
                onClick={((e) => this.props.pauseSong(e, this.props.song._id))}>
                  <BsPause /></a>
                <div className="songImage"> IMG </div>
                <div className="songTitle">
                  {this.props.song.title}</div>
                <div className="showOptions" onClick={this.props.showOptions}>...</div>
                <div className="duration">{this.duration()}</div>
              </span>
            </li>
          )
        }
        //playing, selected, song is paused
        //on click, play song
        //icon is play button
        if (this.props.songIsPaused) {
          return (
            <li className="song songSelected paused songPlaying">
              <span
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}>
                <a className="icon"
                  onClick={((e) => this.props.playSong(e, this.props.song._id))}>
                  <BsPlayFill /></a>
                <div className="songImage"> IMG </div>
                <div className="songTitle">
                  {this.props.song.title}</div>
                <div className="showOptions" onClick={this.props.showOptions}>...</div>
                <div className="duration">{this.duration()}</div>
              </span>
            </li>
          )
        }
      }
      //if playing, not selected, not paused
      //on click, pause song
      //icon is the speaker/volume button
      if (!this.props.songIsPaused) {
        return (
          <li className="song notPaused songPlaying">
            <span
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}>
              <a className="icon"
                onClick={((e) => this.props.pauseSong(e, this.props.song._id))}>
                <RiVolumeUpLine /></a>
              <div className="songImage"> IMG </div>
              <div className="songTitle">
                {this.props.song.title}</div>
              <div className="duration">{this.duration()}</div>
            </span>
          </li>
        )
      } else {
        //if not selected, this song is playing, but song is paused
        //on click, play the song
        //icon is music note
        return (
          <li className="song paused songPlaying">
            <span
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}>
              <a className="icon"
                onClick={((e) => this.props.playSong(e, this.props.song._id))}>
                <RiMusicLine /></a>
              <div className="songImage"> IMG </div>
              <div className="songTitle">
                {this.props.song.title}</div>
              <div className="duration">{this.duration()}</div>
            </span>
          </li>
        )
      }
    } else if (this.props.song._id !== this.props.playingSong) {
      //if song is not playing

      //not playing, song is selected
      //on click play the song
      //icon is play button
      if (this.state.hover || this.props.song._id === this.props.selectedSong) {
        return (
          <li className="song songSelected">
            <span
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}>
              <a className="icon"
                onClick={((e) => this.props.playSong(e, this.props.song._id))}>
                <BsPlayFill /></a>
              <div className="songImage"> IMG </div>
              <div className="songTitle">
                {this.props.song.title}</div>
              <div className="showOptions" onClick={this.props.showOptions}>...</div>
              <div className="duration">{this.duration()}</div>
            </span>
          </li>
        )
      }
      //not playing, not selected, all else
      //on click, play song
      //icon is music note
      return (
        <li className="song">
          <span
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}>
            <a className="icon"
              onClick={((e) => this.props.playSong(e, this.props.song._id))}>
              <RiMusicLine /></a>
            <div className="songImage"> IMG </div>
            <div className="songTitle">
              {this.props.song.title}</div>
            <div className="duration">{this.duration()}</div>
          </span>
        </li>
      )
    }
  }
}


export default Song