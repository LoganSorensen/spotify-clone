import React, { useState, useEffect } from "react";

import SongList from "../songList";

import { spotifyAPI } from "../../utils/spotifyAPI";

const LikedSongs = () => {
  const [tracks, setTracks] = useState();

  useEffect(() => {
    spotifyAPI()
      .get("me/tracks")
      .then((res) => {
        setTracks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="liked-songs">
      <div className="liked-songs-header header">
        <h2>Liked Songs</h2>
        <button>PLAY</button>
      </div>
      {tracks && <SongList tracks={tracks} />}
    </div>
  );
};

export default LikedSongs;
