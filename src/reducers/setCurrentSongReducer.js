import { SET_CURRENT_SONG } from "../actions/types";

const initialState = {};

export const setCurrentSong = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return { ...state, id: action.payload.id };
    default:
      return state;
  }
};
