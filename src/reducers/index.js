import { combineReducers } from "redux";

import { setCurrentSong } from "./setCurrentSongReducer";

const rootReducer = combineReducers({
  setCurrentSong,
});

export default rootReducer;
