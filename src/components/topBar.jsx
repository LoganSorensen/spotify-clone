import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setSearchResults } from "../actions/setSearchResultsActions";

import { spotifyAPI } from "../utils/spotifyAPI";

const TopBar = (props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    hitAPI();
  }, [query]);

  const hitAPI = () => {
    // console.log(query)
    spotifyAPI()
      .get(`search?q=${query}&type=track,artist,album,playlist,show,episode`)
      .then((res) => {
        console.log("response from test: ", res.data);
        props.setSearchResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="top-bar">
      <div className="left-side">
        <i className="fas fa-chevron-left"></i>
        <i className="fas fa-chevron-right"></i>
        <Link to="/search">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={updateQuery}
          />
        </Link>
      </div>
      <div className="right-side">
        <Link to="/user" className="user">
          <div className="user-image-cont">
            <img src={props.image} alt="user" />
          </div>
          <span>{props.name}</span>
        </Link>
        <i className="fas fa-chevron-down tooltip-custom">
          <span className="tooltiptext-bottom">Menu</span>
        </i>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.setUser.name,
    image: state.setUser.image,
  };
};

export default connect(mapStateToProps, { setSearchResults })(TopBar);
