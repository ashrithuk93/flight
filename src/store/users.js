import { user as data } from "./UsersData";

export const userReducer = (
  state = JSON.parse(localStorage.getItem("user")) === null
    ? data
    : JSON.parse(localStorage.getItem("user")),
  action
) => {
  if (action.type === "LOGIN") {
    let updatedList = [...state];
    updatedList[0].loggedIn = true;
    updatedList[0].auth = !action.payload.access;
    localStorage.setItem("user", JSON.stringify(updatedList));
    return updatedList;
  }

  if (action.type === "LOGOUT") {
    let updatedList = [...state];
    updatedList[0].loggedIn = false;
    updatedList[0].auth = false;
    localStorage.setItem("user", JSON.stringify(updatedList));
    return updatedList;
  }

  return state;
};
