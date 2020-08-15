import React from "react";
import {Route} from 'react-router-dom'

import TopBar from "./topBar";
import Browse from "./pages/browse";
import Playlist from './pages/playlist';
import LikedSongs from './pages/likedSongs';

const Viewport = (props) => {
  return (
    <div className="viewport">
      <TopBar />
      <div className="view-content">

      <Route exact path='/browse' component={Browse} />
      <Route exact path='/playlist' component={Playlist} />
      <Route exact path='/liked' component={LikedSongs} />
        {/* {props.page === "Browse" ? (
          <Browse />
        ) : props.page === "Radio" ? (
          <div style={{color: 'white'}}>{props.page}</div>
        ) : props.page === "Playlist" ? (
          <Playlist />
        ) : (
          <div style={{color: 'white'}}>{props.page}</div>
        )} */}
      </div>
    </div>
  );
};

export default Viewport;
