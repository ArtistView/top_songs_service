import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';


const ShowOptions = () => {
  return (
    <div className="options">
      <ContextMenuTrigger id="show-options" holdToDisplay={1}>
        <div className="menu">...</div>
      </ContextMenuTrigger>

      <ContextMenu id="show-options" rtl>
        <MenuItem >Start Radio</MenuItem>
        <MenuItem >Save to your Liked Songs</MenuItem>
        <MenuItem >Add to Queue</MenuItem>
        <MenuItem >Add to Playlist</MenuItem>
        <MenuItem >Copy Song Link</MenuItem>
        <MenuItem >Open in Desktop app</MenuItem>
      </ContextMenu>
    </div>
  )
}

export default ShowOptions