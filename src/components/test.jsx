import React, { useState } from "react";


import { spotifyAPI } from "../utils/spotifyAPI";


const Test = () => {
  const [query, setQuery] = useState('');

  const spotify = () => {
    spotifyAPI()
      .get(`search?q=${query}&type=track,artist,album,playlist,show,episode`)
      .then((res) => {
        console.log("response from test: ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value)
    console.log(query)
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={spotify}>Hit API</button>
    </div>
  );
};

export default Test;
