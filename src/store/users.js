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
    JSON.parse(localStorage.getItem("loginInfo")) === null
      ? initialState
      : JSON.parse(localStorage.getItem("loginInfo")),
  reducers: {
    login(state) {
      state[0].loggedIn = true;
      localStorage.setItem("loginInfo", JSON.stringify(state));
    },
    logout(state) {
      state[0].loggedIn = false;
      state[0].auth = false;
      localStorage.setItem("loginInfo", JSON.stringify(state));
    },
    admin(state) {
      state[0].auth = !state[0].auth;
      localStorage.setItem("loginInfo", JSON.stringify(state));
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
