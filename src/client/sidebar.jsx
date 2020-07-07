import React from 'react';
import { RiHome4Line } from 'react-icons/ri';
import { FiSearch, FiArrowDownCircle } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import { FaSpotify } from 'react-icons/fa'

const SideBarStyle = styled.div`
  width: 232px;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: black;
  overflow-x: hidden;
  padding-top: 20px;
  color: #b3b3b3
`
const SpotifyLogo = styled.div`
  margin-bottom: 15px;
  padding-top: 5px;
  padding-left: 22px;
  font-size: 30px;
  color: white;
  height: 40px;
  width: auto;
`
const MainList = styled.ul`
  padding-left: 22px;
  margin-top: 15px;
  margin-bottom: 12px;
  list-style-type: none;
`
const MainListItem = styled.li`
  padding-bottom: 17px;
  font-size: 23px;
  vertical-align: bottom;
`
const MainListItemText = styled.div`
  padding-left: 14px;
  font-size: 14px;
  vertical-align: middle;
  display: inline-block;
`
const RootList = styled.ul`
  padding-left: 22px;
  padding-right: 22px;
  font-size: 14px;
  list-style-type: none;
`
const RootListTitle = styled.li`
  font-size: 11px;
  letter-spacing: .2em;
  padding-bottom: 10px;
`
const RootListImagePlus = styled.button`
  width: 34px;
  height: 34px;
  background-color: #b3b3b3;
  border: none;
  font-size: 28px;
  text-align: center;
  font-weight: 600;
  color: black;
`
const RootListImageHeart = styled.button`
  width: 34px;
  height: 34px;
  background-image: linear-gradient(to bottom right, #4f32e0 30%, grey, #eaf2fb);
  border: none;
  font-size: 15px;
  text-align: center;
  font-weight: 600;
  color: #b3b3b3;
`
const RootListItem = styled.li`
  line-height: 35px;
  padding-top: 3px;
  padding-bottom: 3px;
`
const RootListItemText = styled.div`
  display: inline-block;
  padding-left: 14px;
  vertical-align: middle;
  font-size: 13px;
  padding-bottom: 6px;
`
const RootListLine = styled.hr`
  color: grey;
  background-color: grey;
  height: .5;
`
const PlaylistList = styled.ul`
  list-style-type: none;
  padding-left: 22px;
  font-size: 14px;
`
const PlaylistListItem = styled.li`
  padding-top: 5px;
  line-height: 25px;
  padding-bottom: 5px;
`
const InstallTag = styled.div`
  padding-left: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  font-weight: 600;
`
const InstallTagText = styled.div`
  display: inline-block;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 600;
`


const SideBar = () => {

  return(
    <SideBarStyle>
      <SpotifyLogo> <FaSpotify /> Spotify </SpotifyLogo>
      <MainList>
        <MainListItem>
          <RiHome4Line />
          <MainListItemText>Home</MainListItemText>
        </MainListItem>
        <MainListItem>
          <FiSearch />
          <MainListItemText>Search</MainListItemText>
        </MainListItem>
        <MainListItem>
          II\
          <MainListItemText>Your Library</MainListItemText>
        </MainListItem>
      </MainList>
      <RootList>
        <RootListTitle>PLAYLISTS</RootListTitle>
        <RootListItem>
          <RootListImagePlus>+</RootListImagePlus>
          <RootListItemText>Create Playlist</RootListItemText>
        </RootListItem>
        <RootListItem>
        <RootListImageHeart><FaHeart /></RootListImageHeart>
          <RootListItemText>Liked Songs</RootListItemText>
        </RootListItem>
        <RootListLine color="#303030" />
      </RootList>
      <PlaylistList>
        <PlaylistListItem>
          Favorites
        </PlaylistListItem>
        <PlaylistListItem>
          R & B
        </PlaylistListItem>
        <PlaylistListItem>
          Pop
        </PlaylistListItem>
        <PlaylistListItem>
          Rock
        </PlaylistListItem>
        <PlaylistListItem>
          Oldies
        </PlaylistListItem>
      </PlaylistList>
      <InstallTag>
        <FiArrowDownCircle />
        <InstallTagText>Install App</InstallTagText>
      </InstallTag>
    </SideBarStyle>
  )
}

export default SideBar