import React from "react";

import TopBar from "./topBar";
import Browse from "./pages/browse";
import Playlist from './pages/playlist'

const Viewport = (props) => {
  return (
    <div className="viewport">
      <TopBar />
      <div className="view-content">
        {props.page === "Browse" ? (
          <Browse />
        ) : props.page === "Radio" ? (
          <div style={{color: 'white'}}>{props.page}</div>
        ) : props.page === "Playlist" ? (
          <Playlist />
        ) : (
          <div style={{color: 'white'}}>{props.page}</div>
        )}
      </div>
    </div>
  );
};

export default Viewport;
