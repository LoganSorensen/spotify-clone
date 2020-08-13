import React from "react";

import LibraryNav from "./libraryNav";

const Navigation = (props) => {
  const handleClick = (e) => {
    let pageName = e.target.innerHTML;
    pageName = pageName.split(">");

    props.changePage(pageName[2]);
  };

  const links = document.querySelectorAll(".page-link");

  const makeActive = (e) => {
    console.log("makeActive", e.target);
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
        <div className="page-link" onClick={handleClick}>
          <i className="fas fa-home"></i>
          Home
        </div>
        <div className="page-link" onClick={handleClick}>
          <i className="fas fa-archive"></i>
          Browse
        </div>
        <div className="page-link" onClick={handleClick}>
          <i className="fas fa-broadcast-tower"></i>
          Radio
        </div>
      </div>
      <LibraryNav />
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
