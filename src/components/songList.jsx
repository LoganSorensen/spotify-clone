import React from "react";

import {songs} from '../data/songs'

const SongList = () => {
  return (
    <div className="song-list">
        <input type="text" placeholder='Filter'/>
      <div className="songs">
          <div className="categories">
              <p className='title'>TITLE</p>
              <p className='artist'>ARTIST</p>
              <p className='album'>ALBUM</p>
              <i className="far fa-calendar-plus date-added"></i>
              <i className="far fa-clock length"></i>
          </div>
          {songs.map((song) => {
              return (
              <div className="song">
                  <p className='title'>{song.title}</p>
                  <p className='artist'>{song.artist}</p>
                  <p className='album'>{song.album}</p>
                  <p className='date-added'>{song.dateAdded}</p>
                  <p className='length'>{song.length}</p>
              </div>
              )
          })}
      </div>
    </div>
  );
};

export default SongList;
