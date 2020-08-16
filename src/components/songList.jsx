import React from "react";
import { Link } from "react-router-dom";

const SongList = (props) => {
  // console.log("songs", props.tracks);
  // console.log(props.tracks.items[0].track);

  const getDate = (date) => {
    const dateArray = date.split("T");
    return dateArray[0];
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
          // console.log("track in song list: ", track.track.album.id);
          return (
            <div key={index} className="song">
              <p className="title">{track.track.name}</p>
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

export default SongList;
