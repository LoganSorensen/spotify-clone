import React from "react";

import SongList from "../songList";

const LikedSongs = () => {
  return (
    <div className="liked-songs">
      <div className="liked-songs-header header">
        <h2>Liked Songs</h2>
        <button>PLAY</button>
      </div>
      <SongList />
    </div>
  );
};

export default LikedSongs;
