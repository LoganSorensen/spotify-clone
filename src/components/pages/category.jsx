import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { spotifyAPI } from "../../utils/spotifyAPI";

const Category = () => {
  const params = useParams();

  const [playlists, setPlaylists] = useState();

  useEffect(() => {
    spotifyAPI()
      .get(`browse/categories/${params.id}/playlists`)
      .then((res) => {
        console.log(res);
        setPlaylists(res.data.playlists.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return (
    <div className="category">
      <div className="category-header header">
        <h2>Category</h2>
      </div>
      <p className="popular">Popular playlists</p>
      <div className="playlists">
        {playlists &&
          playlists.map((playlist) => {
              console.log(playlist)
            return (
              <Link className="playlist">
                <div className="image-cont">
                  <img src={playlist.images[0].url} alt="playlist cover" />
                </div>
                <p className="name">{playlist.name}</p>
                <p className="description">{playlist.description}</p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Category;
