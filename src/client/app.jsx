import React from 'react';
import ReactDom from 'react-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { GrCirclePlay } from 'react-icons/gr'
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';
import styled, { css } from 'styled-components';
import FastAverageColor from 'fast-average-color';


const Container = styled.header`
  padding-left: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-image: url("https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/viacom-SpongeBob-Sea6-Full-Image_GalleryBackground-en-us-1564718608647._SX1080_.jpg");
  background-size: 100%;
  background-repeat: no-repeat ;
  background-position-y: 15%;
  margin: 0;
`
const TopBar = styled.div`
  padding-bottom: 90px;
`
const Verified = styled.div`
  font-size: 12px;
  display: inline-block;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: .15em;
`
const VerifiedText = styled.div`
  display: inline-block;
  vertical-align: .25em;
  margin-left: 8px;
`
const Previous = styled.button`
  border-radius: 50%;
  width: 28px;
  height: 30px;
  font-size: 30px;
  margin-right: 8px;
  font-weight: 200;
  text-indent: -3px;
  color: white;
`
const Next = styled.button`
  border-radius: 50%;
  width: 28px;
  height: 30px;
  font-size: 30px;
  margin-left: 8px;
  opacity: 0.6;
  font-weight: 200;
  text-indent: -1px;
  color: white;
`
const User = styled.button`
  text-align: center;
  width: 30px;
  height: 30px;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 50%;
  border: 1px solid black;
  float: right;
`
const ArtistName = styled.div`
  font-size: 90px;
  font-weight: 600;
  padding-bottom: 15px;
  padding-top: 5px;
`
const Monthly = styled.div`
  font-size: 16px;
  font-weight: 300;
  padding-bottom: 20px;
`
const SecondRow = styled.div`
  margin-top: 15px;
  padding-left: 25px;
  padding-bottom: 10px;
  color: white;
  font-size: 14px;
`
const Overview = styled.button`
  color: white;
  margin-right: 3px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 3px;
  font-weight: 500;
`
const Related = styled.button`
  background-color: transparent;
  margin-left: 7px;
  margin-right: 5px;
  color: white;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 530;
`
const About = styled.button`
  background-color: transparent;
  margin-left: 3px;
  margin-right: 3px;
  color: white;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 530;
`


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
        <Container>
          <TopBar>
            <Previous><RiArrowLeftSLine />  </Previous>
            <Next><RiArrowRightSLine /> </Next>
            <User> </User>
          </TopBar>
          <Verified><img className="checkmark" src="https://fakespotify.s3-us-west-1.amazonaws.com/verified-check.png"/><VerifiedText>    VERIFIED ARTIST</VerifiedText></Verified>
          <ArtistName>Spongebob</ArtistName>
          <Monthly>3,424,759 monthly listeners
          </Monthly>
        </Container>
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
        <SecondRow>
          <Overview>Overview</Overview>
          <Related>Related Artists</Related>
          <About>About</About>
        </SecondRow>
      </div>
    )
  }
}


export default App