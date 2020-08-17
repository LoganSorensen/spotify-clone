import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Viewport from "./components/viewport";
import FriendsActivity from "./components/friendsActivity";
import AudioBar from "./components/audioBar";
import GetAuth from "./components/getAuth";

import { setUser } from "./actions/setUserActions";

import { spotifyAPI } from "./utils/spotifyAPI";

import "./styles/index.css";

function App(props) {
  useEffect(() => {
    spotifyAPI()
      .get("me")
      .then((res) => {
        props.setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  return (
    <div className="App">
      <Route exact path="/" component={GetAuth} />
      <div className="mid-section">
        <Navigation />
        <Viewport />
        <FriendsActivity />
      </div>

      <AudioBar />
    </div>
  );
}

export default connect(null, { setUser })(App);
