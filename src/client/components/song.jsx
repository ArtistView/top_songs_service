import React from 'react';
import {BsMusicNote} from 'react-icons/bs'

//Takes in a song object, and renders all components of that song
class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    }
    //console.log(this.props)
  }

  render () {
    return (
      <div>

        <span><BsMusicNote />{this.props.song.title}</span>
      </div>
    )
  }

}


export default Song