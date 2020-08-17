import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { spotifyAPI } from "../../utils/spotifyAPI";

const User = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    spotifyAPI()
      .get("me")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="user">
      {user && (
        <div className="user-header">
          <div className="user">
            <div className="image-cont">
              <img src={user.images[0].url} alt="user" />
            </div>
            <div className="user-info">
              <span>USER</span>
              <h2>{user.display_name}</h2>
            </div>
          </div>
          <nav>
            <Link className="active">OVERVIEW</Link>
            <Link>RECENTLY PLAYED ARTISTS</Link>
            <Link>PUBLIC PLAYLISTS</Link>
            <Link>FOLLOWING</Link>
            <Link>FOLLOWERS ({user.followers.total})</Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default User;
