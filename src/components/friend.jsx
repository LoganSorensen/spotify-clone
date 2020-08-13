import React from "react";

const Friend = () => {
  return (
    <div className="friend-card">
      <div className="friend-icon"></div>
      <div className="friend">
        <div className="name-and-time">
          <h4 className="friend-name">Connor Sorensen</h4>
          <span className="active-time">5h</span>
        </div>
        <p className="song-name">Let Me Down (feat. blink...)</p>
        <p className="artist-name">Oliver Tree</p>
        <p className="album-name">
          <i class="fas fa-record-vinyl"></i>Let Me Down (feat. b...
        </p>
      </div>
    </div>
  );
};

export default Friend;
