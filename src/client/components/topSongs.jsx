import React from 'react';
import Song from './song.jsx';
import styled, { css } from 'styled-components';
import Promise from 'bluebird'

const SongWrapper = styled.span`
  display: block;
  line-height: 4em;
  list-style-type: none;
  font-size: 16px;
  color: #b3b3b3;
`;



//takes in an array of songs, maps through them and calls song for each one
class TopSong extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props)
    this.state = {
      playingSong: null,
      selectedSong: null,
      songIsPaused: true,
      audiofile: null
    }
    this.changeSelectedSong = this.changeSelectedSong.bind(this);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    if (this.state.audiofile) {
      this.audio = new Audio(this.state.audiofile)
    }
  }

  //function called when a song is clicked
  changeSelectedSong(e, song) {
    //console.log('I got clicked!', id)
    this.setState(() => ({
      selectedSong: song._id
    }))
  }
  //function that is called when the play button is clicked
  playSong(e, song) {
    //if there is currently a song playing
    if (song._id !== this.state.playingSong && !this.state.songIsPaused) {
      this.audio.pause();
    }
    this.setState({
      songIsPaused: false,
      playingSong: song._id,
      audiofile: song.mp3
    }, () => {
      this.audio = new Audio(this.state.audiofile);
      this.audio.play();
    })
  }
  //function that is called to toggle to paused state
  pauseSong() {
    this.setState(() => ({
      songIsPaused: true
    }))
    this.audio.pause();
  }


  render () {
    return (
      <ul>
        {this.props.songs.map(song => {
          return (
            <SongWrapper
              onClick={((e) => this.changeSelectedSong(e, song._id))}>
            <Song
              song={song}
              key={song._id}
              playingSong={this.state.playingSong}
              songIsPaused={this.state.songIsPaused}
              selectedSong={this.state.selectedSong}
              changeSelectedSong={this.changeSelectedSong}
              playSong={this.playSong}
              pauseSong={this.pauseSong}
            /></SongWrapper>
          )
        })}
      </ul>
    )
  }
}


export default TopSong