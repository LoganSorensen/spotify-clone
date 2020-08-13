import React from "react";

import TopBar from "./topBar";

const Viewport = (props) => {
  

  return (
    <div className="viewport">
      <TopBar />
      {props.page === "Browse" ? (
        <div>Browse</div>
      ) : props.page === "Radio" ? (
        <div>Radio</div>
      ) : (
        <div>Home</div>
      )}
    </div>
  );
};

export default Viewport;
