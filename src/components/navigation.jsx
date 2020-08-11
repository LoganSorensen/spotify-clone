import React from "react";

import LibraryNav from './libraryNav';

const Navigation = () => {
  return (
    <div className="navigation-bar">
      Navigation
      <div className="page-links">
        <a href="#">Home</a>
        <a href="#">Browse</a>
        <a href="#">Radio</a>
      </div>
      <LibraryNav />
      <button className="add-playlist-btn">New Playlist</button>
      <div className="album-cover">
        <img src="" alt="album cover art" />
      </div>
    </div>
  );
};

export default Navigation;
