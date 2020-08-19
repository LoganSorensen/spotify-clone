import React, {  } from "react";
import { Carousel } from 'antd';


import { spotifyAPI } from "../utils/spotifyAPI";


const Test = () => {
  const spotify = () => {
    spotifyAPI()
      .get("me/top/artists")
      .then((res) => {
        console.log("response from test: ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>

      <button onClick={spotify}>Hit API</button>
    </div>
  );
};

export default Test;
