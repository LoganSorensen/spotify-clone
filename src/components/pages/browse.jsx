import React from "react";

import { genres } from "../../data/genres";

const Browse = () => {
  const test = document.querySelectorAll(".link");

  const makeActive = (e) => {
    console.log("hitting");
    test.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  test.forEach((link) => {
    link.addEventListener("click", makeActive);
  });

  return (
    <div className="browse">
      <div className="top-section">
        <h2 className='link'>Browse</h2>
        <nav>
          <div className="link active">GENRES &amp; MOODS</div>
          <div className="link">PODCASTS</div>
          <div className="link">CHARTS</div>
          <div className="link">NEW RELEASES</div>
          <div className="link">DISCOVER</div>
          <div className="link">CONCERTS</div>
        </nav>
        <h3>Genres &amp; Moods</h3>
      </div>
      <div className="bottom-section">
        {genres.map((genre, index) => {
          return (
            <div className="genre-card" key={index}>
              <i className={genre.icon}></i>
              <p>{genre.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Browse;
