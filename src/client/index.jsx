import React from 'react';
import ReactDom from 'react-dom';
import TopSongs from './components/topSongs.jsx';

var songs = [
  {
    "title": "Nunc mauris",
    "duration": 259,
    "listens": 4298615,
    "explicit": true,
    "artistId": "5eebe7b2c451ef0e3f4c054d",
    "albumId": "5eebecb1969c0a0fa4e0ce9b",
    "featuredArtists": []
  },
  {
    "title": "Duis",
    "duration": 144,
    "listens": 3546924,
    "explicit": false,
    "artistId": "5eebe7b2c451ef0e3f4c0519",
    "albumId": "5eebecb1969c0a0fa4e0cea0",
    "featuredArtists": []
  },
  {
    "title": "quam dignissim",
    "duration": 230,
    "listens": 3905106,
    "explicit": true,
    "artistId": "5eebe7b2c451ef0e3f4c04f4",
    "albumId": "5eebecb1969c0a0fa4e0ce90",
    "featuredArtists": []
  },
  {
    "title": "metus urna",
    "duration": 177,
    "listens": 2928013,
    "explicit": true,
    "artistId": "5eebe7b2c451ef0e3f4c0518",
    "albumId": "5eebecb1969c0a0fa4e0ce98",
    "featuredArtists": []
  },
  {
    "title": "mollis nec,",
    "duration": 239,
    "listens": 1620848,
    "explicit": false,
    "artistId": "5eebe7b2c451ef0e3f4c0520",
    "albumId": "5eebecb1969c0a0fa4e0cea7",
    "featuredArtists": []
  }
]

class TopFiveSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: songs,
      isSongPlaying: false,
      currentSong: null
    }
  }

  // componentDidMount() {
  //   fetch('/')
  //     .then()
  // }

  render() {
    return (
      <div>
        <header>Popular</header>
        <div>
          <TopSongs songs={this.state.songs} />
        </div>
      </div>
    )
  }
}
ReactDom.render(<TopFiveSongs />, document.getElementById('app'))

export default TopFiveSongs