import React from "react";

import LibraryNav from "./libraryNav";

const Navigation = (props) => {
  const handlePageChange = (e) => {
    let pageName = e.target.innerHTML;
    pageName = pageName.split(">");
    console.log(pageName[pageName.length - 1]);

    props.changePage(pageName[pageName.length - 1]);
  };

  const links = document.querySelectorAll(".page-link-primary");

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
        <div className="page-link page-link-primary page-link-active" onClick={handlePageChange}>
          <i className="fas fa-home"></i>
          Home
        </div>
        <div className="page-link page-link-primary" onClick={handlePageChange}>
          <i className="fas fa-archive"></i>
          Browse
        </div>
        <div className="page-link page-link-primary" onClick={handlePageChange}>
          <i className="fas fa-broadcast-tower"></i>
          Radio
        </div>
      </div>
      <LibraryNav handlePageChange={handlePageChange} />
      <button className="add-playlist-btn">
        <i className="fas fa-plus-circle"></i>New Playlist
      </button>
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
