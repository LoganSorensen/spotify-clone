import React, {useEffect} from "react";

import {spotifyAPI} from '../utils/spotifyAPI'

const Test = () => {

const spotify = () => {
    spotifyAPI().get("browse/categories")
    .then(res => {
        console.log(res.data.categories)
    })
    .catch(err => {
        console.log(err)
    })
  };

  useEffect (() => {
    let q = window.location.hash.substring(1);

    q = q.split("&");
    let z = q[0];
    z = z.split("=");

    console.log(z[1])
    if (z[1] !== undefined) {
        localStorage.setItem('spotifyToken', z[1])
    }
  }, [])

  function getHashParams() {
    let q = window.location.hash.substring(1);

    q = q.split("&");
    let z = q[0];
    z = z.split("=");

    // setAccessToken(z[1]);
    localStorage.setItem('spotifyToken', z[1])
  }

  return (
    <div>
        <a href="https://accounts.spotify.com/en/authorize/?client_id=943586369faa422b8a79545a5ecdc6da&redirect_uri=http:%2F%2Flocalhost:3000&response_type=token">Get Token</a>
      <h1>Testing</h1>
      <button onClick={getHashParams}>Get params</button>
      <button onClick={spotify}>Hit API</button>
    </div>
  );
};

export default Test;
