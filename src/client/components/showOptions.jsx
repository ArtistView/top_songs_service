import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';





const ShowOptions = () => {
  return (
    <div className="song-options">
      <ContextMenuTrigger id="show-options" holdToDisplay={1}>
        <div className="song-ellipsis">...</div>
      </ContextMenuTrigger>

      <ContextMenu id="show-options" className="song-menu" rtl>
        <MenuItem className="song-menu-item">Start Radio</MenuItem>
        <MenuItem className="song-menu-item">Save to your Liked Songs</MenuItem>
        <MenuItem className="song-menu-item">Add to Queue</MenuItem>
        <MenuItem className="song-menu-item">Add to Playlist</MenuItem>
        <MenuItem className="song-menu-item">Copy Song Link</MenuItem>
        <MenuItem className="song-menu-item">Open in Desktop app</MenuItem>
      </ContextMenu>
    </div>
  )
}

export default ShowOptions