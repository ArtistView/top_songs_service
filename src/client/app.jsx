import React from 'react';
import ReactDom from 'react-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { GrCirclePlay } from 'react-icons/gr'
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import styled, { css } from 'styled-components';
import FastAverageColor from 'fast-average-color';
import { FaCheck, FaPlayCircle } from 'react-icons/fa';


const Container = styled.header`
  padding-left: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-image: url("https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/viacom-SpongeBob-Sea6-Full-Image_GalleryBackground-en-us-1564718608647._SX1080_.jpg");
  background-size: 100%;
  background-repeat: no-repeat ;
  background-position-y: 15%;
  margin: 0;
  height: 340px;
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
  padding-bottom: 20px;
`
const CheckMark = styled.button`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #557ef6;
  border: 0;
  color: white;
`
const VerifiedText = styled.div`
  display: inline-block;
  vertical-align: .25em;
  margin-left: 8px;
`
const Previous = styled.button`
  border: 0;
  background-color: #303030;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 28px;
  margin-right: 8px;
  font-weight: 100;
  text-indent: -5px;
  color: white;
`
const Next = styled.button`
  border-radius: 50%;
  background-color: #303030;
  border: 0;
  width: 30px;
  height: 30px;
  font-size: 28px;
  margin-left: 8px;
  opacity: 0.6;
  font-weight: 200;
  text-indent: -.1em;
  color: white;
`
const User = styled.button`
  text-align: center;
  background-color: #303030;
  border: 0;
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
  padding-bottom: 55px;
  padding-top: 25px;
`
const Monthly = styled.div`
  font-size: 16px;
  font-weight: 300;
`
const FirstRow = styled.div`
  padding-top: 10px;
  height: 80px;
`
const ArtistPlay = styled.button`
  height: 53px;
  width: 53px;
  font-size: 55px;
  text-align: center;
  margin-left: 25px;
  margin-right: 15px;
  color: green;
  background-color: transparent;
  border-radius: 50%;
  border: 0;
`
const SecondRow = styled.div`
  margin-top: 18px;
  padding-left: 25px;
  color: white;
  font-size: 14px;
`
const Overview = styled.button`
  color: white;
  border: 0;
  background-color: #303030;
  margin-right: 3px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 17px;
  padding-right: 17px;
  border-radius: 5px;
  font-weight: 500;
`
const Related = styled.button`
  background-color: transparent;
  border: 0;
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
  border: 0;
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
            <Previous><IoIosArrowBack />  </Previous>
            <Next><IoIosArrowForward /> </Next>
            <User> </User>
          </TopBar>
          <Verified><CheckMark> <FaCheck /> </CheckMark><VerifiedText>    VERIFIED ARTIST</VerifiedText></Verified>
          <ArtistName>Spongebob</ArtistName>
          <Monthly>3,424,759 monthly listeners
          </Monthly>
        </Container>
        <FirstRow>
          <ArtistPlay> <FaPlayCircle /> </ArtistPlay>
          <button className="artist-follow-btn" onClick={this.follow}>{this.state.following}</button>
          <div className="artist-options">
            <ContextMenuTrigger id="artist-show-options" holdToDisplay={1}>
              <div className="ellipsis">...</div>
            </ContextMenuTrigger>
            <ContextMenu id="artist-show-options" className="artist-menu">
              <MenuItem className="artist-menu-item">Start Radio</MenuItem>
              <MenuItem className="artist-menu-item">Follow</MenuItem>
              <MenuItem className="artist-menu-item">Copy Artist Link</MenuItem>
              <MenuItem className="artist-menu-item">Open in Desktop app</MenuItem>
            </ContextMenu>
          </div>
        </FirstRow>
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