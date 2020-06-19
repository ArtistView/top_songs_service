import React from 'react';
import {BsMusicNote} from 'react-icons/bs'

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