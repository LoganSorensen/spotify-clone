import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import AlbumSongs from "../albumSongs";
import MoreAlbums from "../moreAlbums";

import { spotifyAPI } from "../../utils/spotifyAPI";

const Album = () => {
  const params = useParams();

  const [album, setAlbum] = useState();
  const [tracks, setTracks] = useState();
  const [artist, setArtist] = useState();

  useEffect(() => {
    spotifyAPI()
      .get(`/albums/${params.id}`)
      .then((res) => {
        console.log(res.data)
        setAlbum(res.data);
        setTracks(res.data.tracks.items);
        setArtist(res.data.artists[0])
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const getYear = (date) => {
    const dateArray = date.split("-");
    return dateArray[0];
  };

  const getCopyright = (copyrights) => {
    let copyString = "";
    let text = copyrights[0].text;
    let type = copyrights[0].type;
    if (type === "C") {
      copyString += "©";
    } else if (type === "P") {
      copyString += "℗";
    }

    copyrights.forEach((copyright) => {
      if (copyright.type !== type) {
        if (copyright.type === "C") {
          copyString += "©";
        } else if (copyright.type === "P") {
          copyString += "℗";
        }
      }
    });
    copyString += text;

    return copyString;
  };

  return (
    <>
      {album && artist && (
        <div className="album">
          <div className="album-page-header header">
            <div className="image-cont">
              <img src={album.images[1].url} alt="album cover" />
            </div>
            <div className="album-info">
              <span className="album-tag">{album.type.toUpperCase()}</span>
              <h2>{album.name}</h2>
              <p>
                By
                <Link to={`/artist/${album.artists[0].id}`}>
                  {album.artists[0].name}
                </Link>
              </p>
              <div className="date-and-length">
                <p>{getYear(album.release_date)}</p>
                <p className="spacer">•</p>
                <p>{album.total_tracks} songs, 17 min</p>
              </div>
              <div className="album-btns">
                <button className="play-btn green-btn">PLAY</button>
                <button className="icon-btn">
                  <i className="far fa-heart"></i>
                </button>
                <button className="icon-btn">
                  <i className="fas fa-ellipsis-h"></i>
                </button>
              </div>
            </div>
          </div>
          {tracks && <AlbumSongs tracks={tracks} />}
          <p className="copyrights">{getCopyright(album.copyrights)}</p>
          <div className="more-albums">

          <h4>More by {artist.name}</h4>
          <MoreAlbums name={album.name} id={artist.id} />
          </div>
        </div>
      )}
    </>
  );
};

export default Album;
