import React from 'react';
import { RiMusicLine } from 'react-icons/ri';
import { RiVolumeUpLine } from 'react-icons/ri';
import { BsPlayFill } from 'react-icons/bs';
import { BsPause } from 'react-icons/bs';
import ShowOptions from './showOptions.jsx';
import styled, { css } from 'styled-components'

const StyledIcon = styled.a`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
  padding-left: 15px;
`;

const StyledSong = styled.li`
  padding-top: 5px;
  padding-bottom: 5px;
`;
const StyledImage = styled.img`
  display: inline-block;
  margin-left: 12px;
  margin-right: 5px;
  height: 48px;
  width: 50px;
  vertical-align: middle;
`;
const StyledTitle = styled.div`
  display: inline-block;
  text-weight: 600;
  text-align: left;
  margin-left: 10px;
  vertical-align: middle;
  width: 80%;

`;
const StyledTitleSelected = styled.div`
  display: inline-block;
  text-weight: 600;
  text-align: left;
  margin-left: 10px;
  vertical-align: middle;
  width: 70%;
`;
const StyledDuration = styled.div`
  display: inline-block;
  text-align: right;
  width: 10;
  max-height: 50px;
`;
const StyledSelected = styled.li`
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #303030;
`;
const StyledPlaying = styled.li`
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
  color: green;
`;
const StyledSelectedPlaying = styled.li`
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
  color: green;
  background-color: #303030;
`;


//Takes in a song object, and renders all components of that song

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      hover: false
    }
    this.toggleHoverOn = this.toggleHoverOn.bind(this);
    this.toggleHoverOff = this.toggleHoverOff.bind(this);
  }
  //when mouse over, toggle the hover function to rerender state
  toggleHoverOn() {
    this.setState({
      hover: true
    })
  }
  toggleHoverOff() {
    this.setState({
      hover: false
    })
  }
  //calculte duration in minutes. Database stores in seconds
  duration() {
    var seconds = (this.props.song.duration) % 60
    if (seconds < 10) { seconds = '0' + seconds }
    var minutes = Math.floor(this.props.song.duration / 60)
    let duration = minutes + ":" + seconds;
    return duration
  }

  //conditional rendering based on state of props and this
  render() {
    //if this is the playing song
    if (this.props.song._id === this.props.playingSong) {
      //if this song is selected or hovered over
      if (this.state.hover || this.props.song._id === this.props.selectedSong) {
        //playing, selected, song is not paused
        //on click, pause the song
        //icon is pause
        //show options
        if (!this.props.songIsPaused) {
          return (
            <StyledSelectedPlaying id="song-selected-playing-nopause"
              onMouseEnter={this.toggleHoverOn}
              onMouseLeave={this.toggleHoverOff}>
              <StyledIcon className="test-icon-selected-playing"
                onClick={((e) => this.props.pauseSong(e, this.props.song))}>
                <BsPause />
              </StyledIcon>
              <StyledImage src={this.props.song.image} />
              <StyledTitleSelected>
                {this.props.song.title}
              </StyledTitleSelected>
              <ShowOptions onClick={((e) => this.props.changeSlectedSong(e, this.props.song))} />
              <StyledDuration>
                {this.duration()}
              </StyledDuration>
            </StyledSelectedPlaying>
          )
        }
        //playing, selected, song is paused
        //on click, play song
        //icon is play button
        //show options
        if (this.props.songIsPaused) {
          return (
            <StyledSelectedPlaying id="song-selected-playing-pause"
              onMouseEnter={this.toggleHoverOn}
              onMouseLeave={this.toggleHoverOff}>
              <StyledIcon className="test-icon-selected-paused"
                onClick={((e) => this.props.playSong(e, this.props.song))}>
                <BsPlayFill />
              </StyledIcon>
              <StyledImage src={this.props.song.image} />
              <StyledTitleSelected>
                {this.props.song.title}
              </StyledTitleSelected>
              <ShowOptions onClick={((e) => this.props.changeSlectedSong(e, this.props.song))} />
              <StyledDuration>
                {this.duration()}
              </StyledDuration>
            </StyledSelectedPlaying>
          )
        }
      }
      //if playing, not selected, not paused
      //on click, pause song
      //icon is the speaker/volume button
      if (!this.props.songIsPaused) {
        return (
          <StyledPlaying id="song-playing-nopause"
            onMouseEnter={this.toggleHoverOn}
            onMouseLeave={this.toggleHoverOff}>
            <StyledIcon className="test-icon-playing"
              onClick={((e) => this.props.pauseSong(e, this.props.song))}>
              <RiVolumeUpLine />
            </StyledIcon>
            <StyledImage src={this.props.song.image} />
            <StyledTitle>
              {this.props.song.title}
            </StyledTitle>
            <StyledDuration>
              {this.duration()}
            </StyledDuration>
          </StyledPlaying>
        )
      } else {
        //if not selected, this song is playing, but song is paused
        //on click, play the song
        //icon is music note
        return (
          <StyledPlaying id="song-playing-pause"
            onMouseEnter={this.toggleHoverOn}
            onMouseLeave={this.toggleHoverOff}>
            <StyledIcon className="test-icon-paused"
              onClick={((e) => this.props.playSong(e, this.props.song))}>
              <RiMusicLine />
            </StyledIcon>
            <StyledImage src={this.props.song.image} />
            <StyledTitle>
              {this.props.song.title}
            </StyledTitle>
            <StyledDuration>
              {this.duration()}
            </StyledDuration>
          </StyledPlaying>
        )
      }
    } else if (this.props.song._id !== this.props.playingSong) {
      //if song is not playing

      //not playing, song is selected or hovered
      //on click play the song
      //icon is play button
      //include show options
      if (this.state.hover || this.props.song._id === this.props.selectedSong) {
        return (
          <StyledSelected id="song-selected"
            onMouseEnter={this.toggleHoverOn}
            onMouseLeave={this.toggleHoverOff}>
            <StyledIcon className="test-icon-selected"
              onClick={((e) => this.props.playSong(e, this.props.song))}>
              <BsPlayFill />
            </StyledIcon>
            <StyledImage src={this.props.song.image} />
            <StyledTitleSelected>
              {this.props.song.title}
            </StyledTitleSelected>
            <ShowOptions onClick={((e) => this.props.changeSlectedSong(e, this.props.song))} />
            <StyledDuration>
              {this.duration()}
            </StyledDuration>
          </StyledSelected>
        )
      }
      //not playing, not selected, all else
      //on click, play song
      //icon is music note
      return (
        <StyledSong id="song"
          onMouseEnter={this.toggleHoverOn}
          onMouseLeave={this.toggleHoverOff}>
          <StyledIcon className="test-icon"
            onClick={((e) => this.props.playSong(e, this.props.song))}>
            <RiMusicLine />
          </StyledIcon>
          <StyledImage src={this.props.song.image} />
          <StyledTitle>
            {this.props.song.title}
          </StyledTitle>
          <StyledDuration>
            {this.duration()}
          </StyledDuration>
        </StyledSong>
      )
    }
  }

}


export default Song