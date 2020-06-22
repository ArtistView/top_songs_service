import React from 'react';

const ShowOptions = (props) => {
  console.log('showOptions ', props)
  return (
    <ul className="optionsList">
      <li class="listItem">
        Start Radio
      </li>
      <li className="listItem">
        Save to your Liked Songs
      </li>
      <li className="listItem">
        Add to Queue
      </li>
      <li className="listItem">
        Add to Playlist
      </li>
      <li className="listItem">
        Copy Song Link
      </li>
      <li className="listItem">
        Open in Desktop app
      </li>
    </ul>
  )
}

export default ShowOptions