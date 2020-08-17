import { SET_USER } from "../actions/types";

const initialState = {};

export const setUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.payload.display_name,
        followers: action.payload.followers.total,
        id: action.payload.id,
        image: action.payload.images[0].url,
      };
    default:
      return state;
  }
};
