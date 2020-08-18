import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const User = (props) => {
  return (
    <div className="user">
      <div className="user-header header">
        <div className="user">
          <div className="image-cont">
            <img src={props.image} alt="user" />
          </div>
          <div className="user-info">
            <span>USER</span>
            <h2>{props.name}</h2>
          </div>
        </div>
        <nav>
          <Link className="active">OVERVIEW</Link>
          <Link>RECENTLY PLAYED ARTISTS</Link>
          <Link>PUBLIC PLAYLISTS</Link>
          <Link>FOLLOWING</Link>
          <Link>FOLLOWERS ({props.followers})</Link>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.setUser.name,
    followers: state.setUser.followers,
    image: state.setUser.image,
  };
};

export default connect(mapStateToProps, {})(User);
