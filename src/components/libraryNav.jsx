import React from "react";
import {Link} from 'react-router-dom'

import { playlists } from "../data/playlists";

const LibraryNav = (props) => {
  return (
    <div className="lib-and-playlist-links">
      <div className="lib-links">
        <h3 className="library-header">YOUR LIBRARY</h3>
        <Link className="page-link-custom">Made For You</Link>
        <Link className="page-link-custom">Recently Played</Link>
        <Link to='liked' className="page-link-custom">Liked Songs</Link>
        <Link className="page-link-custom">Albums</Link>
        <Link className="page-link-custom">Artists</Link>
        <Link className="page-link-custom" value='Podcasts'>Podcasts</Link>
      </div>
      <div className="playlist-links">
        <h3 className="playlist-header">PLAYLISTS</h3>
        {playlists.map((playlist) => {
          return (
            <Link
              key={playlist.id}
              className="page-link-custom"
              // onClick={props.handlePageChange}
              // value='Playlist'
              to='playlist'
            >
              {playlist.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LibraryNav;
