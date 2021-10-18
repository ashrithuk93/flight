import { data } from "./DataSkeleton";
import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
  name: "flight",
  initialState:
    JSON.parse(localStorage.getItem("data")) === null
      ? data
      : JSON.parse(localStorage.getItem("data")),
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
      localStorage.setItem("data", JSON.stringify(state));
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

      localStorage.setItem("data", JSON.stringify(state));
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

      localStorage.setItem("data", JSON.stringify(state));
    },
  },
});

export const flightActions = flightSlice.actions;

export default flightSlice;

// export const flightReducer = (
//   state = JSON.parse(localStorage.getItem("data")) === null
//     ? data
//     : JSON.parse(localStorage.getItem("data")),
//   action
// ) => {
//   if (action.type === "DELETE_PASSENGER") {
//     const flightId = state.findIndex((item) => item.id === action.payload.fid);
//     const passenger = state[flightId].passengers.findIndex(
//       (item, index) => index === action.payload.pid
//     );

//     let updatedList = [...state];

//     updatedList[flightId].passengers[passenger].name = "";
//     updatedList[flightId].passengers[passenger].age = "";
//     updatedList[flightId].passengers[passenger].address = "";
//     updatedList[flightId].passengers[passenger].passportNo = "";
//     updatedList[flightId].passengers[passenger].ancillary = "";
//     updatedList[flightId].passengers[passenger].disabled = false;
//     updatedList[flightId].passengers[passenger].infant = false;

//     localStorage.setItem("data", JSON.stringify(updatedList));

//     return updatedList;
//   }

//   if (action.type === "EDIT_PASSENGER") {
//     const flightId = state.findIndex((item) => item.id === action.payload.id);
//     const passenger = state[flightId].passengers.findIndex(
//       (item) => item.seat === action.payload.seatNumber
//     );

//     let updatedList = [...state];

//     updatedList[flightId].passengers[passenger].name = action.payload.name;
//     updatedList[flightId].passengers[passenger].age = action.payload.age;
//     updatedList[flightId].passengers[passenger].address =
//       action.payload.address;
//     updatedList[flightId].passengers[passenger].passportNo =
//       action.payload.passport;
//     updatedList[flightId].passengers[passenger].ancillary =
//       action.payload.services;
//     updatedList[flightId].passengers[passenger].disabled =
//       action.payload.wheelChairValue;
//     updatedList[flightId].passengers[passenger].infant =
//       action.payload.infantValue;

//     localStorage.setItem("data", JSON.stringify(updatedList));

//     return updatedList;
//   }

//   if (action.type === "CHECK_IN") {
//     const flightId = state.findIndex((item) => item.id === action.payload.fid);
//     const passenger = state[flightId].passengers.findIndex(
//       (item) => item.seat === action.payload.seat
//     );

//     let updatedList = [...state];
//     if (updatedList[flightId].passengers[passenger].name.length !== 0) {
//       updatedList[flightId].passengers[passenger].checkedIn =
//         !action.payload.check;
//     }
//     localStorage.setItem("data", JSON.stringify(updatedList));
//     return updatedList;
//   }

//   return state;
// };
