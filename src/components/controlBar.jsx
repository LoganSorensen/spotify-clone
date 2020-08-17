import React from "react";

const ControlBar = () => {
  return (
    <div className="controls-bar">
      <div className="song-info">
        <div className="name-and-heart">
          <a href="#" className="song-name">
            Are You What You Want To Be?
          </a>
          <i className="far fa-heart tooltip-custom"></i>
        </div>
        <a href="#" className="artist-name">
          Foster The People
        </a>
      </div>
      <div className="controls">
        <div className="buttons">
          <i className="fas fa-random tooltip-custom">
            <span className="tooltiptext-bottom">Shuffle</span>
          </i>
          <i className="fas fa-step-backward tooltip-custom">
            <span className="tooltiptext-bottom">Previous</span>
          </i>
          <i className="far fa-play-circle tooltip-custom"></i>
          <i className="fas fa-step-forward tooltip-custom">
            <span className="tooltiptext-bottom">Next</span>
          </i>
          <i className="fas fa-redo-alt tooltip-custom">
            <span className="tooltiptext-bottom">Repeat</span>
          </i>
        </div>
      </div>
      <div className="queue-and-audio">
        <i className="fas fa-indent tooltip-custom">
          <span className="tooltiptext">Queue</span>
        </i>
        <i className="fas fa-laptop-house tooltip-custom">
          <span className="tooltiptext">Devices Available</span>
        </i>
        <div className="volume">
          <i className="fas fa-volume-up tooltip-custom">
            <span className="tooltiptext">Mute</span>
          </i>
          <input type="range" />
        </div>
      </div>
    </div>
  );
};

export default ControlBar;
