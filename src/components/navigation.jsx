import React from "react";

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
        <button
          className="page-link-custom page-link-active"
          value="Home"
          onClick={handlePageChange}
        >
          <i className="fas fa-home"></i>
          Home
        </button>
        <button
          className="page-link-custom"
          value="Browse"
          onClick={handlePageChange}
        >
          <i className="fas fa-archive"></i>
          Browse
        </button>
        <button
          className="page-link-custom"
          value="Radio"
          onClick={handlePageChange}
        >
          <i className="fas fa-broadcast-tower"></i>
          Radio
        </button>
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
