import React from "react";

import { spotifyAPI } from "../utils/spotifyAPI";

const Test = () => {
  // const [query, setQuery] = useState("");

  const spotify = () => {
    spotifyAPI()
      .get(`me/tracks`)
      .then((res) => {
        console.log("response from test: ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleChange = (e) => {
  // setQuery(e.target.value);
  // };

  return (
    <div>
      {/* <input type="text" onChange={handleChange} /> */}
      <button onClick={spotify}>Hit API</button>
    </div>
  );
};

export default Test;
