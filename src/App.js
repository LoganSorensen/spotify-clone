import React, {useState} from "react";
// import {Redirect} from 'react-router-dom';

import Navigation from "./components/navigation";
import Viewport from "./components/viewport";
import FriendsActivity from "./components/friendsActivity";
// import ControlBar from "./components/controlBar";
import AudioBar from "./components/audioBar";

// import RedirectComp from './components/redirect';

import "./styles/index.css"

function App() {

const [page, setPage] = useState("Playlist")

  const changePage = (page) => {
    console.log(page)
    console.log('page changed to', page)
    setPage(page)
  }

  return (
    <div className="App">
      <div className="mid-section">
        <Navigation changePage={changePage} />
        <Viewport page={page} />
        <FriendsActivity />
      </div>
      {/* <ControlBar /> */}
      <AudioBar  />
    </div>
  );
}

export default App;
