import React from "react";

import { playlists } from "../data/playlists";

const LibraryNav = (props) => {
  return (
    <div className="lib-and-playlist-links">
      <div className="lib-links">
        <h3 className="library-header">YOUR LIBRARY</h3>
        <button className="page-link">Made For You</button>
        <button className="page-link">Recently Played</button>
        <button className="page-link">Liked Songs</button>
        <button className="page-link">Albums</button>
        <button className="page-link">Artists</button>
        <button className="page-link">Podcasts</button>
      </div>
      <div className="playlist-links">
        <h3 className="playlist-header">PLAYLISTS</h3>
        {playlists.map((playlist) => {
          return (
            <button
              key={playlist.id}
              className="page-link"
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
