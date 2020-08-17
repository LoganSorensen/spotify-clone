import React from "react";
import { connect } from "react-redux";

const AudioBar = (props) => {
  return (
    <div className="audio-bar">
      {props.id && (
        <iframe
          src={`https://open.spotify.com/embed/track/${props.id}`}
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="spotifyPlayer"
        ></iframe>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.setCurrentSong.id,
  };
};

export default connect(mapStateToProps, {})(AudioBar);
