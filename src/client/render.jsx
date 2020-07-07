import React from 'react';
import ReactDom from 'react-dom';
import TopFiveSongs from './topFiveSongs.jsx';
import App from './app.jsx'
import SideBar from './sidebar.jsx'




ReactDom.render(<SideBar />, document.getElementById('side-bar'))
ReactDom.render(<App />, document.getElementById('app'))
ReactDom.render(<TopFiveSongs />, document.getElementById('topFiveSongs'))