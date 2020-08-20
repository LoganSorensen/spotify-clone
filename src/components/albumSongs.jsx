import React from "react";
import { connect } from "react-redux";

import { setCurrentSong } from "../actions/setCurrentSongActions";

const AlbumSongs = (props) => {
  const handleClick = (track) => {
    props.setCurrentSong(track);
  };

  function convertMS(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  const width = window.matchMedia("(max-width: 1400px)");

  const truncateStr = (str) => {
    if (width.matches) {
      const length = 75;
      return str.length > length ? str.substr(0, length - 1) + "..." : str;
    }
    const length = 200;
    return str.length > length ? str.substr(0, length - 1) + "..." : str;
  };

  return (
    <div className="album-songs">
      <div className="categories">
        <p className="track-number">#</p>
        <p className="title">TITLE</p>
        <i className="far fa-clock length"></i>
      </div>
      <div className="tracks">
        {props.tracks.map((track) => {
          return (
            <div key={track.track_number} className="track">
              <i
                className="far fa-play-circle"
                onClick={() => handleClick(track)}
              ></i>
              <p className="track-number">{track.track_number}</p>
              <i className="far fa-heart"></i>
              <p className="name">{truncateStr(track.name)}</p>
              <p className="length">{convertMS(track.duration_ms)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(null, { setCurrentSong })(AlbumSongs);
