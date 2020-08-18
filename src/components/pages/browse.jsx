import React, { useState, useEffect } from "react";

import { spotifyAPI } from "../../utils/spotifyAPI";
import Categories from "../categories";

const Browse = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    spotifyAPI()
      .get("browse/categories")
      .then((res) => {
        console.log(res)
        setCategories(res.data.categories.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="browse">
      <div className="top-section">
        <h2>Browse</h2>
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
        {categories && <Categories categories={categories} />}
      </div>
    </div>
  );
};

export default Browse;
