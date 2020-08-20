import { SET_SEARCH_RESULTS } from "./types";

export const setSearchResults = (results) => {
  // console.log('actions', results)
  return { type: SET_SEARCH_RESULTS, payload: results };
};
