import React, { useState } from "react";
import axios from "axios";

import {spotifyAPI} from '../utils/spotifyAPI'

const Test = () => {
//   const [accessToken, setAccessToken] = useState();
const accessToken = localStorage.getItem('spotifyToken')

  let config = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

//   const hitAPI = () => {
//     axios
//       .get("http://localhost:5000")
//       .then((res) => {
//         let token = window.location.hash.substring(1);
//         token = token.split("&");
//         console.log(token);
//         //   console.log(res)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const spotify = () => {
//     axios.get("https://api.spotify.com/v1/browse/categories", {headers: {
//       Authorization: "Bearer " + accessToken,
//     }})
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })
//   };

const spotify = () => {
    spotifyAPI().get("browse/categories")
    .then(res => {
        console.log(res.data.categories)
    })
    .catch(err => {
        console.log(err)
    })
  };

  function getHashParams() {
    let q = window.location.hash.substring(1);

    q = q.split("&");
    let z = q[0];
    z = z.split("=");

    // setAccessToken(z[1]);
    localStorage.setItem('spotifyToken', z[1])
  }

  console.log(accessToken);

  return (
    <div>
        <a href="https://accounts.spotify.com/en/authorize/?client_id=943586369faa422b8a79545a5ecdc6da&redirect_uri=http:%2F%2Flocalhost:3000&response_type=token">Get Token</a>
      <h1>Testing</h1>
      {/* <button onClick={hitAPI}>Click</button> */}
      <button onClick={getHashParams}>Get params</button>
      <button onClick={spotify}>Hit API</button>
    </div>
  );
};

export default Test;
