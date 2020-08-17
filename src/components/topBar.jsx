import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const TopBar = (props) => {
  return (
    <div className="top-bar">
      <div className="left-side">
        <i className="fas fa-chevron-left"></i>
        <i className="fas fa-chevron-right"></i>
        <input type="text" className="search-bar" placeholder="Search" />
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
