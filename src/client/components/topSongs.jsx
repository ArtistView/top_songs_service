import React from 'react';
import Song from './song.jsx';

//takes in an array of songs, maps through them and calls song for each one
class TopSong extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props)
    this.state = {
      playingSong: null,
      selectedSong: null,
      songIsPaused: true
    }
    this.changeSelectedSong = this.changeSelectedSong.bind(this);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.showOptions = this.showOptions.bind(this);

  }

  //function called when a song is clicked
  changeSelectedSong(e, id) {
    //console.log('I got clicked!', id)
    this.setState(() => ({
      selectedSong: id
    }))
  }
  //function that is called when the play button is clicked
  playSong(e, id) {
    this.setState(() => ({
      songIsPaused: false,
      playingSong: id
    }))
  }
  //function that is called to toggle to paused state
  pauseSong() {
    this.setState(() => ({
      songIsPaused: true
    }))
  }

  showOptions() {
    //show options for adding song to queue, etc.
  }


  render () {
    return (
      <ul>
        {this.props.songs.map(song => {
          return (
            <span
              className="songWrapper"
              onClick={((e) => this.changeSelectedSong(e, song._id))}>
            <Song
              song={song}
              key={song._id}
              playingSong={this.state.playingSong}
              songIsPaused={this.state.songIsPaused}
              selectedSong={this.state.selectedSong}
              playSong={this.playSong}
              pauseSong={this.pauseSong}
              showOptions={this.showOptions}
            /></span>
          )
        })}
      </ul>
    )
  }
}


export default TopSong