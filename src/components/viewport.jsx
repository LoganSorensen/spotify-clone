import React from "react";
import { Route } from "react-router-dom";

import TopBar from "./topBar";
import Browse from "./pages/browse";
import Playlist from "./pages/playlist";
import User from "./pages/user";
import Album from "./pages/album";
import Category from "./pages/category";
import Home from "./pages/home";
import SearchPage from "./pages/search";

import Test from "./test";

const Viewport = (props) => {
  return (
    <div className="viewport">
      <TopBar />
      <div className="view-content">
        <Route exact path="/home" component={Home} />
        <Route exact path="/user" component={User} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/playlist" component={Playlist} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/category/:id">
          <Category />
        </Route>
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
