import React from 'react';
import Song from './song.jsx';
import styled, { css } from 'styled-components';
import Promise from 'bluebird';
import onClickOutside from 'react-onclickoutside';

const SongWrapper = styled.span`
  display: block;
  list-style-type: none;
  font-size: 16px;
  color: #b3b3b3;
`;
const UnorderedList = styled.ul`
  padding-left: 0px;
  padding-right: 40px;
`



//takes in an array of songs, maps through them and calls song for each one
class TopSongs extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props)
    this.state = {
      playingSong: null,
      selectedSong: null,
      songIsPaused: true,
      audioFile: null,
      audioIndex: null,
      audioList: []
    }
    this.changeSelectedSong = this.changeSelectedSong.bind(this);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
  }

  componentDidMount() {
    this.props.songs.map(song => {this.state.audioList.push(song)})
  }

  //function called when a song is clicked
  changeSelectedSong(e, song) {
    //console.log('I got clicked!', id)
    this.setState(() => ({
      selectedSong: song._id
    }))
  }

  handleClickOutside (e) {
    //Wraps component so that when a click occurs outside of this component, the selected song is unselected
    this.setState({
      selectedSong: null
    })
  }

  //function that is called when the play button is clicked
  playSong(e, song) {
    //if there is currently a song playing
    if (song._id !== this.state.playingSong && !this.state.songIsPaused) {
      //pause current song
      this.audio.pause();
    }
    //update the state with the clicked song's details
    this.setState({
      songIsPaused: false,
      playingSong: song._id,
      audioFile: song.mp3,
      audioIndex: this.state.audioList.indexOf(song)
    }, () => {
      //create new audio
      this.audio = new Audio(this.state.audioFile);
      //play audio
      this.audio.play();
      //define the next song when song has ended
      this.audio.addEventListener('ended', () => {
        //as long as it isn't the last song, play next.
        if (this.state.audioIndex < 4) {
          this.playSong(e, this.state.audioList[this.state.audioIndex + 1])
        }
        //otherwise no song will play
      })
    })
  }
  //function that is called to toggle to paused state
  pauseSong() {
    //set the state to paused
    this.setState({
      songIsPaused: true
    }, () => {
      //pause the audio
      this.audio.pause();
    })
  }


  render () {
    return (
      <UnorderedList>
        {this.props.songs.map(song => {
          return (
            <SongWrapper
              onClick={((e) => this.changeSelectedSong(e, song))}>
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
      </UnorderedList>
    )
  }
}



export default onClickOutside(TopSongs)
