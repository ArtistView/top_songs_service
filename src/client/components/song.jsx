import React from 'react';

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
        <i data-feather="volume-2"></i>
        <span>{this.props.song.title}</span>
      </div>
    )
  }

}


export default Song