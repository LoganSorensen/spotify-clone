import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setCurrentSong } from "../actions/setCurrentSongActions";

const SongList = (props) => {
  const getDate = (date) => {
    const dateArray = date.split("T");
    return dateArray[0];
  };

  const handleClick = (track) => {
    props.setCurrentSong(track.track);
  };

  const truncateStr = (str) => {
    const length = 60;
    return str.length > length ? str.substr(0, length - 1) + "..." : str;
  };

  return (
    <div className="song-list">
      <input type="text" placeholder="Filter" />
      <div className="songs">
        <div className="categories">
          <p className="title">TITLE</p>
          <p className="artist">ARTIST</p>
          <p className="album">ALBUM</p>
          <i className="far fa-calendar-plus date-added"></i>
          <i className="far fa-clock length"></i>
        </div>
        {props.tracks.items.map((track, index) => {
          return (
            <div key={index} className="song">
              <i
                className="far fa-play-circle"
                onClick={() => handleClick(track)}
              ></i>
              <p className="title">{truncateStr(track.track.name)}</p>
              <p className="artist">{track.track.artists[0].name}</p>
              <p className="album">
                <Link to={`/album/${track.track.album.id}`}>
                  {track.track.album.name}
                </Link>
              </p>
              <p className="date-added">{getDate(track.added_at)}</p>
              <p className="length">{track.track.duration_ms}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(null, { setCurrentSong })(SongList);
