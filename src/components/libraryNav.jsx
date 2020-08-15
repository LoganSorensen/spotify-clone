import React from "react";
import { Link } from "react-router-dom";

import { playlists } from "../data/playlists";

const LibraryNav = (props) => {
  console.log("props", props.playlists);
  return (
    <div className="lib-and-playlist-links">
      <div className="lib-links">
        <h3 className="library-header">YOUR LIBRARY</h3>
        <Link to="/made-for-you" className="page-link-custom">
          Made For You
        </Link>
        <Link to="/recently-played" className="page-link-custom">
          Recently Played
        </Link>
        <Link to="/liked" className="page-link-custom">
          Liked Songs
        </Link>
        <Link to="/albums" className="page-link-custom">
          Albums
        </Link>
        <Link to="/artists" className="page-link-custom">
          Artists
        </Link>
        <Link to="/podcasts" className="page-link-custom">
          Podcasts
        </Link>
      </div>
      <div className="playlist-links">
        <h3 className="playlist-header">PLAYLISTS</h3>
        {props.playlists.map((playlist) => {
          console.log(playlist.uri)
          return (
            <Link key={playlist.id} className="page-link-custom" to="/playlist">
              {playlist.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LibraryNav;
