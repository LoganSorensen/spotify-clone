import React from "react";

const AudioBar = () => {
  return (
    <div className="audio-bar">
      <iframe
        src="https://open.spotify.com/embed?uri=spotify%3Atrack%3A7cDlVNC3d0RRW4p2qmiMLm"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="spotifyPlayer"
      ></iframe>
    </div>
  );
};

export default AudioBar;
