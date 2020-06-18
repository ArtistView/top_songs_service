import React from 'react';

class TopFiveSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs = [];
      isSongPlaying = false;
      currentSong = null;
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>This is something</div>
    )
  }
}