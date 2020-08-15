import React from "react";
import { Link } from "react-router-dom";

import PlaylistModal from "./playlistModal";
import LibraryNav from "./libraryNav";

const Navigation = (props) => {
  const handlePageChange = (e) => {
    const pageName = e.target.value;
    props.changePage(pageName);
  };

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
      <LibraryNav handlePageChange={handlePageChange} />
      <PlaylistModal />
      <div className="album-cover">
        <img
          src="https://source.unsplash.com/random/200x200"
          alt="album cover art"
        />
      </div>
    </div>
  );
};

export default Navigation;
