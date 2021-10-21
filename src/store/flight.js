import { data } from "./DataSkeleton";
import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
  name: "flight",
  initialState:
    JSON.parse(localStorage.getItem("flight_data")) === null
      ? data
      : JSON.parse(localStorage.getItem("flight_data")),
  reducers: {
    checkIn(state, action) {
      const flightId = state.findIndex(
        (item) => item.id === action.payload.fid
      );
      const passenger = state[flightId].passengers.findIndex(
        (item) => item.seat === action.payload.seat
      );

      if (state[flightId].passengers[passenger].name.length !== 0) {
        state[flightId].passengers[passenger].checkedIn = !action.payload.check;
      }
      localStorage.setItem("flight_data", JSON.stringify(state));
    },
    deletePassenger(state, action) {
      const flightId = state.findIndex(
        (item) => item.id === action.payload.fid
      );
      const passenger = state[flightId].passengers.findIndex(
        (item, index) => index === action.payload.pid
      );
      state[flightId].passengers[passenger].name = "";
      state[flightId].passengers[passenger].age = "";
      state[flightId].passengers[passenger].address = "";
      state[flightId].passengers[passenger].passportNo = "";
      state[flightId].passengers[passenger].ancillary = "";
      state[flightId].passengers[passenger].disabled = false;
      state[flightId].passengers[passenger].infant = false;

      localStorage.setItem("flight_data", JSON.stringify(state));
    },
    editPassenger(state, action) {
      const flightId = state.findIndex((item) => item.id === action.payload.id);
      const passenger = state[flightId].passengers.findIndex(
        (item) => item.seat === action.payload.seatNumber
      );

      state[flightId].passengers[passenger].name = action.payload.name;
      state[flightId].passengers[passenger].age = action.payload.age;
      state[flightId].passengers[passenger].address = action.payload.address;
      state[flightId].passengers[passenger].passportNo =
        action.payload.passport;
      state[flightId].passengers[passenger].ancillary = action.payload.services;
      state[flightId].passengers[passenger].disabled =
        action.payload.wheelChairValue;
      state[flightId].passengers[passenger].infant = action.payload.infantValue;

      localStorage.setItem("flight_data", JSON.stringify(state));
    },
  },
});

export const flightActions = flightSlice.actions;

export default flightSlice;
