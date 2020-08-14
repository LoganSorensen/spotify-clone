import React from "react";

const Playlist = () => {
  return (
    <div className="playlist">
      <div className="playlist-header">
        <div className="playlist-img"></div>
        <div className="playlist-info">
            <p className='playlist-tag'>PLAYLIST</p>
          <h2>lofi</h2>
          <div className="creator-and-length">
            <p>
              Created by <span>Logan Sorensen</span>
            </p>
            <p className='spacer'>•</p>
            <p>13 songs, 30 min</p>
          </div>
          <div className="playlist-btns">
            <button className='play-btn'>PLAY</button>
            <button className='more-btn'><i className="fas fa-ellipsis-h"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
