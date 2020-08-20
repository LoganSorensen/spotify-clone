import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { spotifyAPI } from "../utils/spotifyAPI";

const MoreAlbums = ({ id, name }) => {
  const [albums, setAlbums] = useState();

  useEffect(() => {
    spotifyAPI()
      .get(`artists/${id}/albums`)
      .then((res) => {
        setAlbums(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const getYear = (date) => {
    const year = date.split("-");
    return year[0];
  };

  const filterAlbums = (albums) => {
    albums = albums.slice(0, 6);
    const result = albums.filter((album) => album.album_group === "album");
    const otherAlbums = result.filter((result) => result.name !== name);
    return otherAlbums;
  };

  return (
    <div className="album-list">
      {albums &&
        filterAlbums(albums).map((album, index) => {
          return (
            <div key={index} className="album">
              <Link to={`/album/${album.id}`}>
                <div className="image-cont">
                  <img src={album.images[1].url} alt="album cover" />
                </div>
              </Link>
              <Link to={`/album/${album.id}`}>
                <p className="name">{album.name}</p>
              </Link>
              <p className="year">{getYear(album.release_date)}</p>
            </div>
          );
        })}
    </div>
  );
};

export default MoreAlbums;
