import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const TopBar = (props) => {
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //  if (query !== "") {

  //    console.log("from the useEffect", query);
  //  }
   
  // }, [query]);

  const doneTyping = () => {
    console.log('done typing',query)
  }

  const updateQuery = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
    if (query === e.target.value) {
      setTimeout(doneTyping, 5000)

    }
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

export default connect(mapStateToProps, {})(TopBar);
