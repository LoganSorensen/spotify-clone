import React from "react";

import LibraryNav from "./libraryNav";

const Navigation = () => {
  return (
    <div className="navigation-bar">
      <i class="fas fa-ellipsis-h"></i>
      <div className="page-links">
        <div className="page-link">
          <a href="#">
            <i class="fas fa-home"></i>Home
          </a>
        </div>
        <div className="page-link">
          <a href="#">
            <i class="fas fa-archive"></i>Browse
          </a>
        </div>
        <div className="page-link">
          <a href="#">
            <i class="fas fa-broadcast-tower"></i>Radio
          </a>
        </div>
      </div>
      <LibraryNav />
      <button className="add-playlist-btn">
        <i class="fas fa-plus-circle"></i>New Playlist
      </button>
      <div className="album-cover">
        <img src="" alt="album cover art" />
      </div>
    </div>
  );
};

export default Navigation;
