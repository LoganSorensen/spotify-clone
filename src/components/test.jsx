import React, { useEffect } from "react";

import { spotifyAPI } from "../utils/spotifyAPI";

const Test = () => {
  const spotify = () => {
    spotifyAPI()
      .get("users/1241091914")
      .then((res) => {
        console.log("response from test: ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let q = window.location.hash.substring(1);

    q = q.split("&");
    let z = q[0];
    z = z.split("=");

    console.log(z[1]);
    if (z[1] !== undefined) {
      localStorage.setItem("spotifyToken", z[1]);
    }
  }, []);

  function getHashParams() {
    let q = window.location.hash.substring(1);

    q = q.split("&");
    let z = q[0];
    z = z.split("=");

    // setAccessToken(z[1]);
    localStorage.setItem("spotifyToken", z[1]);
  }

  return (
    <div>
      <a href="https://accounts.spotify.com/en/authorize/?client_id=943586369faa422b8a79545a5ecdc6da&redirect_uri=http:%2F%2Flocalhost:3000&response_type=token">
        Get Token
      </a>
      <h1>Testing</h1>
      <button onClick={getHashParams}>Get params</button>
      <button onClick={spotify}>Hit API</button>
      <iframe
        src="https://open.spotify.com/embed?uri=spotify%3Atrack%3A7cDlVNC3d0RRW4p2qmiMLm"
        width="100%"
        height="30"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="spotifyPlayer"
      ></iframe>
      <audio controls>
        <source src="https://p.scdn.co/mp3-preview/0f9f5ba8d2380ff1e00b565c2904d83088b34bc0?cid=943586369faa422b8a79545a5ecdc6da" />
      </audio>

      <audio
        src="https://open.spotify.com/embed?uri=spotify%3Atrack%3A7cDlVNC3d0RRW4p2qmiMLm"
        controls
      ></audio>
    </div>
  );
};

export default Test;
