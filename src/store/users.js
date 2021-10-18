import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    loggedIn: false,
    auth: false,
  },
];

const userSlice = createSlice({
  name: "user",
  initialState:
    JSON.parse(localStorage.getItem("user")) === null
      ? initialState
      : JSON.parse(localStorage.getItem("user")),
  reducers: {
    login(state) {
      state[0].loggedIn = true;
      localStorage.setItem("user", JSON.stringify(state));
    },
    logout(state) {
      state[0].loggedIn = false;
      state[0].auth = false;
      localStorage.setItem("user", JSON.stringify(state));
    },
    admin(state) {
      state[0].auth = !state[0].auth;
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;

// export const userReducer = (
//   state = JSON.parse(localStorage.getItem("user")) === null
//     ? initialState
//     : JSON.parse(localStorage.getItem("user")),
//   action
// ) => {
//   if (action.type === "LOGIN") {
//     let updatedList = [...state];
//     updatedList[0].loggedIn = true;
//     localStorage.setItem("user", JSON.stringify(updatedList));
//     return updatedList;
//   }

//   if (action.type === "LOGOUT") {
//     let updatedList = [...state];
//     updatedList[0].loggedIn = false;
//     updatedList[0].auth = false;
//     localStorage.setItem("user", JSON.stringify(updatedList));
//     return updatedList;
//   }

//   if (action.type === "ADMIN") {
//     let updatedList = [...state];
//     updatedList[0].auth = !state[0].auth;
//     localStorage.setItem("user", JSON.stringify(updatedList));
//     return updatedList;
//   }

//   return state;
// };
