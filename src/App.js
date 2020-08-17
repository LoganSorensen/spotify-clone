import React, { useEffect } from "react";
import {connect} from 'react-redux'

import Navigation from "./components/navigation";
import Viewport from "./components/viewport";
import FriendsActivity from "./components/friendsActivity";
import AudioBar from "./components/audioBar";

import {setUser} from './actions/setUserActions'

import {spotifyAPI} from './utils/spotifyAPI'

import "./styles/index.css";


function App(props) {
useEffect(() => {
  spotifyAPI()
    .get("me")
    .then((res) => {
      props.setUser(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
}, [props]);

  return (
    <div className="App">
      <div className="mid-section">
        <Navigation />
        <Viewport />
        <FriendsActivity />
      </div>

      <AudioBar />
    </div>
  );
}

export default connect(null, {setUser})(App);
