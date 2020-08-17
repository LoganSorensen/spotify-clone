import { combineReducers } from "redux";

import { setCurrentSong } from "./setCurrentSongReducer";
import {setUser} from './setUserReducer'

const rootReducer = combineReducers({
  setCurrentSong,
  setUser, 
});

export default rootReducer;
