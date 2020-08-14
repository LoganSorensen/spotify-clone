import React from "react";

import { playlists } from "../data/playlists";

const LibraryNav = (props) => {
  return (
    <div className="lib-and-playlist-links">
      <div className="lib-links">
        <h3 className="library-header">YOUR LIBRARY</h3>
        <button className="page-link-custom">Made For You</button>
        <button className="page-link-custom">Recently Played</button>
        <button className="page-link-custom">Liked Songs</button>
        <button className="page-link-custom">Albums</button>
        <button className="page-link-custom">Artists</button>
        <button className="page-link-custom">Podcasts</button>
      </div>
      <div className="playlist-links">
        <h3 className="playlist-header">PLAYLISTS</h3>
        {playlists.map((playlist) => {
          return (
            <button
              key={playlist.id}
              className="page-link-custom"
              onClick={props.handlePageChange}
            >
              {playlist.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LibraryNav;
