import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';





const ShowOptions = () => {
  return (
    <div className="options">
      <ContextMenuTrigger id="show-options" holdToDisplay={1}>
        <div className="song-ellipsis">...</div>
      </ContextMenuTrigger>

      <ContextMenu id="show-options" className="menu" rtl>
        <MenuItem className="menu-item">Start Radio</MenuItem>
        <MenuItem className="menu-item">Save to your Liked Songs</MenuItem>
        <MenuItem className="menu-item">Add to Queue</MenuItem>
        <MenuItem className="menu-item">Add to Playlist</MenuItem>
        <MenuItem className="menu-item">Copy Song Link</MenuItem>
        <MenuItem className="menu-item">Open in Desktop app</MenuItem>
      </ContextMenu>
    </div>
  )
}

export default ShowOptions