import React from 'react';
import Song from './song.jsx';

//takes in an array of songs, maps through them and calls sons for each one
class TopSong extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props)
    this.state = {
      songIsPlaying: false,
      playingSong: null,
      songIsSelected: false,
      selectedSong: null,
      songIsPaused: false

    }
    this.changeSelectedSong = this.changeSelectedSong.bind(this);
    this.playSong = this.playSong.bind(this);
  }

  //function called when a song is clicked
  changeSelectedSong(e, id) {
    //console.log('I got clicked!', id)
    this.setState(() => ({
      songIsSelected: true,
      selectedSong: id //update this based on target
    }))
  }
  //function that is called when the play button is clicked
  playSong() {
    this.setState((e, id) => ({
      songIsPlaying: true,
      songIsPaused: false,
      playingSong: id //update this based on target
    }))
  }

  render () {
    return (
      <ul>
        {this.props.songs.map(song => {
          return (
            <a onClick={((e) => this.changeSelectedSong(e, song._id))}>
            <Song
              song={song}
              songIsPlaying={this.state.songIsPlaying}
              playingSong={this.state.playingSong}
              songIsSelected={this.state.songIsSelected}
              songIsPaused={this.state.songIsPaused}
              selectedSong={this.state.selectedSong}
              playSong={this.playSong}
            /></a>
          )
        })}
      </ul>
    )
  }
}


export default TopSong