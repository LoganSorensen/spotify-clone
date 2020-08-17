import { SET_USER } from "./types";

export const setUser = (user) => {
//   console.log("actions", user);
  return { type: SET_USER, payload: user}
};
