import React from 'react';
import ReactDom from 'react-dom';
import TopSongs from './components/topSongs.jsx';

//songs array as a test until server working
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

//main component rendered to DOM
class TopFiveSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //an array of songs, currently referencing above array
      songs: songs,
      //boolean for whether or not a song is currently being played
      isSongPlaying: false,
      //will reference the Id of the song currently playing
      currentSong: null
    }
  }

  // componentDidMount() {
  //   fetch('/')
  //     .then()
  // }

  //places a popular header on div, and calls TopSongs with the whole array
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