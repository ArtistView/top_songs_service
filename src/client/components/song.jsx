import React from 'react';
import {RiMusicLine} from 'react-icons/ri';
import {RiVolumeUpLine} from 'react-icons/ri';
import {BsPlayFill} from 'react-icons/bs';
//Takes in a song object, and renders all components of that song
class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      songIsSelected: false
    }
    //console.log(this.props)
    this.selectSong = this.selectSong.bind(this);
    this.playSong = this.playSong.bind(this);
  }

  selectSong() {
    this.setState(e => ({
      songIsSelected: true
    }));
  }

  playSong() {
    this.setState(e => ({
      isPlaying: true
    }));
  }

  render () {
    if (this.state.songIsSelected)  {
    return (
      <div className="songSelected">
        <span>
          <a onClick={this.playSong}><BsPlayFill /></a>
          {this.props.song.title}

        </span>
      </div>
    )} else if (!this.state.songIsSelected) {
      return (
        <div><a className="topSong" onClick={this.selectSong}>
          <span><RiMusicLine />{this.props.song.title}</span>
        </a></div>
      )
    }
  }

}


export default Song