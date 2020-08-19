import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setCurrentSong } from "../actions/setCurrentSongActions";

const SongList = (props) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const results = props.tracks.items.filter(
      (item) =>
        item.track.name.toLowerCase().includes(query.toLowerCase()) ||
        item.track.artists[0].name
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        item.track.album.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(results);
  }, [query, props.tracks.items]);

  const filterSongs = (e) => {
    setQuery(e.target.value);
  };

  const removeFilter = () => {
    setQuery("");
  };

  const getDate = (date) => {
    const dateArray = date.split("T");
    return dateArray[0];
  };

  const handleClick = (track) => {
    props.setCurrentSong(track.track);
  };

  const truncateStr = (str, type) => {
    if (type === 'title') {
      const length = 60;
      return str.length > length ? str.substr(0, length - 1) + "..." : str;
    } else {
      const length = 40;
      return str.length > length ? str.substr(0, length - 1) + "..." : str;
    }
  };

  return (
    <div className="song-list">
      <input
        type="text"
        placeholder="Filter"
        value={query}
        onChange={filterSongs}
      />
      <div className="songs">
        <div className="categories">
          <p className="title">TITLE</p>
          <p className="artist">ARTIST</p>
          <p className="album">ALBUM</p>
          <i className="far fa-calendar-plus date-added"></i>
          <i className="far fa-clock length"></i>
        </div>
        {data.length > 0 ? (
          data.map((track, index) => {
            // inital render without filter
            return (
              <div key={index} className="song">
                <i
                  className="far fa-play-circle"
                  onClick={() => handleClick(track)}
                ></i>
                <p className="title">{truncateStr(track.track.name, 'title')}</p>
                <p className="artist">{track.track.artists[0].name}</p>
                <p className="album">
                  <Link to={`/album/${track.track.album.id}`}>
                    {truncateStr(track.track.album.name, 'album')}
                  </Link>
                </p>
                <p className="date-added">{getDate(track.added_at)}</p>
                <p className="length">{track.track.duration_ms}</p>
              </div>
            );
          })
        ) : data.length === 0 && query !== "" ? (
          // renders if there are no matches for the search
          <div className="no-results">
            <p>No results for "{query}".</p>
            <button className="remove-filter" onClick={removeFilter}>
              Remove Filter
            </button>
          </div>
        ) : (
          props.tracks.items.map((track, index) => {
            // renders matches for the query
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
          })
        )}
      </div>
    </div>
  );
};

export default connect(null, { setCurrentSong })(SongList);
