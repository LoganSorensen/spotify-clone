import React from "react";

import Navigation from "./components/navigation";
import Viewport from "./components/viewport";
import FriendsActivity from "./components/friendsActivity";
import ControlBar from "./components/controlBar";

import "./App.css";
import "./styles/index.css"

function App() {
  return (
    <div className="App">
      <div className="mid-section">
        <Navigation />
        <Viewport />
        <FriendsActivity />
      </div>
      <ControlBar />
    </div>
  );
}

export default App;
