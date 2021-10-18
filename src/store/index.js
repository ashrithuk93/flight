import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./users";
import flightSlice from "./flight";

const store = configureStore({
  reducer: {
    flightReducer: flightSlice.reducer,
    userReducer: userSlice.reducer,
  },
});

export default store;
