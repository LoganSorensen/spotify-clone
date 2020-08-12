import React from "react";

const LibraryNav = () => {
  return (
    <div className="lib-and-playlist-links">
      <div className="lib-links">
        <h3 className="library-header">YOUR LIBRARY</h3>
        <a href="#">Made For You</a>
        <a href="#">Recently Played</a>
        <a href="#">Liked Songs</a>
        <a href="#">Albums</a>
        <a href="#">Artists</a>
        <a href="#">Podcasts</a>
      </div>
      <div className="playlist-links">
        <h3 className="playlist-header">PLAYLISTS</h3>
      </div>
    </div>
  );
};

export default LibraryNav;
