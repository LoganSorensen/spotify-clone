import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PlaylistModal from "./playlistModal";
import LibraryNav from "./libraryNav";

import { spotifyAPI } from "../utils/spotifyAPI";

const Navigation = (props) => {
  const [playlists, setPlaylists] = useState();

  useEffect(() => {
    spotifyAPI()
      .get("me/playlists")
      .then((res) => {
        // console.log(res.data.items);
        setPlaylists(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const links = document.querySelectorAll(".page-link-custom");

  const makeActive = (e) => {
    links.forEach((link) => {
      link.classList.remove("page-link-active");
    });
    e.target.classList.add("page-link-active");
  };

  links.forEach((link) => {
    link.addEventListener("click", makeActive);
  });

  return (
    <div className="navigation-bar">
      <i className="fas fa-ellipsis-h"></i>
      <div className="page-links">
        <Link to="/" className="page-link-custom page-link-active">
          <i className="fas fa-home"></i>
          Home
        </Link>
        <Link to="/browse" className="page-link-custom">
          <i className="fas fa-archive"></i>
          Browse
        </Link>
        <Link to="/radio" className="page-link-custom">
          <i className="fas fa-broadcast-tower"></i>
          Radio
        </Link>
      </div>
      {playlists !== undefined && <LibraryNav playlists={playlists} />}
      <PlaylistModal />
      {/* <div className="album-cover">
        <img
          src="https://source.unsplash.com/random/200x200"
          alt="album cover art"
        />
      </div> */}
    </div>
  );
};

export default Navigation;
