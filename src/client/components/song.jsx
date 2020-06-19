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
      <li>
        <span>{this.props.song.title}</span>
      </li>
    )
  }

}


export default Song