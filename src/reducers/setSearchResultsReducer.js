import { SET_SEARCH_RESULTS } from "../actions/types";

const initialState = {
  albums: [],
  artists: [],
  episodes: [],
  playlists: [],
  shows: [],
  tracks: [],
};

export const setSearchResults = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      console.log("reducer", action.payload);
      return {
        ...state,
        albums: action.payload.albums.items.slice(0, 4),
        artists: action.payload.artists.items.slice(0, 4),
        episodes: action.payload.episodes.items.slice(0, 4),
        playlists: action.payload.playlists.items.slice(0, 4),
        shows: action.payload.shows.items.slice(0, 4),
        tracks: action.payload.tracks.items.slice(0, 4),
      };
    default:
      return state;
  }
};
