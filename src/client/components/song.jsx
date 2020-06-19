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
  }

  selectSong() {
    this.setState({
      songIsSelected: true
    });
  }

  playSong() {
    this.setState({
      isPlaying: true
    });
  }

  render () {
    if (this.state.songIsSelected)  {
    return (
      <div class="songSelected">
        <span>
          <a onClick={playSong}><BsPlayFill /></a>
          {this.props.song.title}

        </span>
      </div>
    )} else {
      return (
        <div><a class="topSong" onClick={selectSong}>
          <span><RiMusicLine />{this.props.song.title}</span>
        </a></div>
      )
    }
  }

}


export default Song