import React from 'react';
import ReactDom from 'react-dom';
import TopSongs from './components/topSongs.jsx';
import App from './app.jsx'

//main component rendered to DOM
class TopFiveSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //an array of songs, currently referencing above array
      songs: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('/songs')
      .then (res => res.json())
      .then(songs => {
        this.setState({
          songs: songs,
          isLoaded: true
        })
      })
  }

  //places a popular header on div, and calls TopSongs with the whole array
  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <h3 className="popular">Popular</h3>
          <div>
            <TopSongs songs={this.state.songs} />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h3>Popular</h3>
        </div>
      )
    }
  }
}

ReactDom.render(<App />, document.getElementById('app'))
ReactDom.render(<TopFiveSongs />, document.getElementById('topFiveSongs'))

export default TopFiveSongs