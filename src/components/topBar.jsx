import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { spotifyAPI } from "../utils/spotifyAPI";

const TopBar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    spotifyAPI()
      .get("me")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="top-bar">
      <div className="left-side">
        <i className="fas fa-chevron-left"></i>
        <i className="fas fa-chevron-right"></i>
        <input type="text" className="search-bar" placeholder="Search" />
      </div>
      <div className="right-side">
        {user && (
          <Link to="/user" className="user">
            <div className="user-image-cont">
              <img src={user.images[0].url} alt="user" />
            </div>
            <span>{user.display_name}</span>
          </Link>
        )}
        <i className="fas fa-chevron-down tooltip-custom">
          <span className="tooltiptext-bottom">Menu</span>
        </i>
      </div>
    </div>
  );
};

export default TopBar;
