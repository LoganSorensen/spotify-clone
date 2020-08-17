import React from "react";

const Friend = () => {
  return (
    <div className="friend-card">
      <div className="friend-icon"></div>
      <div className="friend">
        <div className="name-and-time">
          <h4 className="friend-name">Friend Name</h4>
          <span className="active-time">5h</span>
        </div>
        <p className="song-name">Song Name</p>
        <p className="artist-name">Artist Name</p>
        <p className="album-name">
          <i className="fas fa-record-vinyl"></i>
          Album Name
        </p>
      </div>
    </div>
  );
};

export default Friend;
