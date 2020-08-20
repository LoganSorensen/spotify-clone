import { combineReducers } from "redux";

import { setCurrentSong } from "./setCurrentSongReducer";
import { setUser } from "./setUserReducer";
import { setSearchResults } from "./setSearchResultsReducer";

const rootReducer = combineReducers({
  setCurrentSong,
  setUser,
  setSearchResults,
});

export default rootReducer;
