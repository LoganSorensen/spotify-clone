import React from "react";

const ControlBar = () => {
  return (
  <div className="controls-bar">
    <div className="song-info">
      <div className="names">
      <a className="song-name">Placeholder Name</a>
      <a className="artist-name">Placeholder Name</a>
      </div>
      <i class="far fa-heart"></i>
    </div>
      <div className="controls"></div>
      <div className="queue-and-audio"></div>
    </div>
  );
};

export default ControlBar;
