import React from 'react';
import ReactDom from 'react-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { GrCirclePlay } from 'react-icons/gr'
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: 'FOLLOW'
    }
    this.follow = this.follow.bind(this)
  }
  follow() {
    if (this.state.following === 'FOLLOW') {
      this.setState({
        following: 'FOLLOWING'
      })
    } else {
      this.setState({
        following: 'FOLLOW'
      })
    }
  }

  render() {
    return (
      <div className="artist-container">
        <header>
          <div className="topBar">
            <button className="previous"><RiArrowLeftSLine />  </button>
            <button className="next"><RiArrowRightSLine /> </button>
            <button className="user"> </button>
          </div>
          <div className="verified"><img className="checkmark" src="https://fakespotify.s3-us-west-1.amazonaws.com/verified-check.png"/>    VERIFIED ARTIST</div>
          <div className="artist-name">Spongebob</div>
          <div className="monthly">3,424,759 monthly listeners</div></header>
        <div className="first-row-options">
          <button className="play-btn">  </button>
          <button className="follow-btn" onClick={this.follow}>{this.state.following}</button>
          <div className="options">
            <ContextMenuTrigger id="artist-show-options" holdToDisplay={1}>
              <div className="ellipsis">...</div>
            </ContextMenuTrigger>
            <ContextMenu id="artist-show-options" className="menu">
              <MenuItem className="menu-item">Start Radio</MenuItem>
              <MenuItem className="menu-item">Follow</MenuItem>
              <MenuItem className="menu-item">Copy Artist Link</MenuItem>
              <MenuItem className="menu-item">Open in Desktop app</MenuItem>
            </ContextMenu>
          </div>
        </div>
        <div className="second-row-options">
          <button className="overview-btn">Overview</button>
          <button className="related-btn">Related Artists</button>
          <button className="about-btn">About</button>
        </div>
      </div>
    )
  }
}


export default App