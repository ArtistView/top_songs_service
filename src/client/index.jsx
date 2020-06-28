import React from 'react';
import ReactDom from 'react-dom';
import { TopSongs, onClickOutside } from './components/topSongs.jsx';
import App from './app.jsx'
import styled, { css } from 'styled-components'

const Title = styled.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.6;
  letter-spacing: -.36px;
  color: white;
`;

const Wrapper = styled.section`
  margin-left: 25px;
  background-color: transparent;
`;

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

  // currently works to load images but is not async
  componentDidMount() {
    fetch('/songs')
      .then (res => res.json())
      //iterate through the songs, and fetch each image
      .then((songs) => {
        songs.map((song) => {
          fetch(`/songs/${song.albumId}`)
            .then(res => res.json())
            //udpate the song image
            .then((album) => song.image= album.imageUrl)
        })
        return songs;
      })
      .then(songs => {
        this.setState({
          songs: songs,
          //isLoaded: true
        })
      })
      //waits 300 ms to finish rendering page. This is temporarily solving the async issue with fetching the songs' images
      setTimeout( () => {
        this.setState({
          isLoaded: true
        })
      }, 300)
  }




  //places a popular header on div, and calls TopSongs with the whole array
  render() {
    if (this.state.isLoaded) {
      return (
        <Wrapper>
          <Title>Popular</Title>
          <div>
            <TopSongs songs={this.state.songs} />
          </div>
        </Wrapper>
      )
    } else {
      return (
        <Title>Popular</Title>
      )
    }
  }
}

ReactDom.render(<App />, document.getElementById('app'))
ReactDom.render(<TopFiveSongs />, document.getElementById('topFiveSongs'))

export default TopFiveSongs