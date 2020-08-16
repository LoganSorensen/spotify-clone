import React from "react";
import { Route } from "react-router-dom";

import TopBar from "./topBar";
import Browse from "./pages/browse";
import Playlist from "./pages/playlist";
// import LikedSongs from "./pages/likedSongs";
import User from "./pages/user";
import Album from "./pages/album"

import Test from "./test";

const Viewport = (props) => {
  return (
    <div className="viewport">
      <TopBar />
      <div className="view-content">
        <Route exact path="/" component={Test} />
        <Route exact path="/user" component={User} />
        <Route exact path="/browse" component={Browse} />
        {/* <Route exact path="/liked" component={LikedSongs} /> */}
        <Route exact path="/playlist" component={Playlist} />
        <Route path="/playlist/:id">
          <Playlist />
        </Route>
        <Route path="/album/:id">
          <Album />
        </Route>
      </div>
    </div>
  );
};

export default Viewport;
