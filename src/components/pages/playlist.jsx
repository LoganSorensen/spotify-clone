import React from "react";

import SongList from '../songList';

const Playlist = (props) => {
  // console.log('pl props', props)
  return (
    <div className="playlist">
      <div className="playlist-page-header">
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
      <SongList />
    </div>
  );
};

export default Playlist;