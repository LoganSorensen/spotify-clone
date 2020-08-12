import React from "react";

const ControlBar = () => {
  return (
    <div className="controls-bar">
      <div className="song-info">
        <div className="name-and-heart">
          <a href="#" className="song-name">Are You What You Want To Be?</a>
        <i class="far fa-heart tooltip"></i>
        </div>
          <a href="#" className="artist-name">Foster The People</a>
      </div>
      <div className="controls">
        <div className="buttons">
        <i class="fas fa-random"></i>
        <i class="fas fa-step-backward"></i>
        <i class="far fa-play-circle"></i>
        <i class="fas fa-step-forward"></i>
        <i class="fas fa-redo-alt"></i>
        </div>
      </div>
      <div className="queue-and-audio">
        <i class="fas fa-indent tooltip">
          <span className="tooltiptext">Queue</span>
        </i>
        <i class="fas fa-laptop-house tooltip">
          <span className="tooltiptext">Devices Available</span>
        </i>
        <div className="volume">
          <i class="fas fa-volume-up tooltip">
            <span className="tooltiptext">Mute</span>
          </i>
          <input type="range" />
        </div>
      </div>
    </div>
  );
};

export default ControlBar;
