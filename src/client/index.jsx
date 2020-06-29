import React from 'react';
import ReactDom from 'react-dom';
import TopSongs from './components/topSongs.jsx';
import App from './app.jsx'
import SideBar from './sidebar.jsx'
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
      //an array of songs
      songs: [],
      isLoaded: false
    }
  }

  // currently works to load images but is not async
  componentDidMount() {
    fetch('/songs')
      .then (res => res.json())
      .then(songs => {
        console.log(songs)
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

ReactDom.render(<SideBar />, document.getElementById('side-bar'))
ReactDom.render(<App />, document.getElementById('app'))
ReactDom.render(<TopFiveSongs />, document.getElementById('topFiveSongs'))

export default TopFiveSongs