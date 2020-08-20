import { SET_CURRENT_SONG } from "./types";

export const setCurrentSong = (track) => {
  return { type: SET_CURRENT_SONG, payload: track };
};
