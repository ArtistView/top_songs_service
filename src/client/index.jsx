import React from 'react';
import ReactDom from 'react-dom';

class TopFiveSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      isSongPlaying: false,
      currentSong: null
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
ReactDom.render(<TopFiveSongs />, document.getElementById('app'))

export default TopFiveSongs