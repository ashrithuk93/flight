import { createStore } from "redux";

const data = [
  {
    id: "f1",
    loggedIn: false,
    auth: false,
    name: "Flight 1",
    from: "Bangalore",
    to: "Chennai",
    passengers: [
      {
        name: "Name 1",
        age: "21",
        address: "Street 1",
        passportNo: "1234567890",
        ancillary: "Wheelchair",
        seat: 1,
        checkedIn: true,
        disabled: true,
        infant: false,
      },
      {
        name: "Name 2",
        age: "22",
        address: "Street 2",
        passportNo: "1234567891",
        ancillary: "None",
        seat: 2,
        checkedIn: true,
        disabled: false,
        infant: true,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 3,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 4,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 5,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 6,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 7,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 8,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 9,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 10,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 11,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 12,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 13,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 14,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 15,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 16,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 17,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 18,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 19,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 20,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 21,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 22,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 23,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 24,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 25,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 26,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 27,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 28,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 29,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 30,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 31,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 32,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 33,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 34,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 35,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 36,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 37,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 38,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 39,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 40,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
    ],
  },
  {
    id: "f2",
    loggedIn: false,
    auth: false,
    name: "Flight 2",
    from: "Bangalore",
    to: "Mumbai",
    passengers: [
      {
        name: "Name 3",
        age: 23,
        address: "Street 3",
        passportNo: "1234567890",
        ancillary: "Wheelchair",
        seat: 1,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "Name 4",
        age: 24,
        address: "Street 4",
        passportNo: "1234567891",
        ancillary: "None",
        seat: 2,
        checkedIn: true,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 3,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 4,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 5,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 6,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 7,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 8,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 9,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 10,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 11,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 12,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 13,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 14,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 15,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 16,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 17,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 18,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 19,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 20,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 21,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 22,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 23,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 24,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 25,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 26,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 27,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 28,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 29,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 30,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 31,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 32,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 33,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 34,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 35,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 36,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 37,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 38,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "",
        age: "",
        address: "",
        passportNo: "",
        ancillary: "",
        seat: 39,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
      {
        name: "Name 40",
        age: "22",
        address: "Street 40",
        passportNo: "89761213",
        ancillary: "",
        seat: 40,
        checkedIn: false,
        disabled: false,
        infant: false,
      },
    ],
  },
];

// localStorage.setItem("data", JSON.stringify(data));

const flightReducer = (
  state = JSON.parse(localStorage.getItem("data")) === null
    ? data
    : JSON.parse(localStorage.getItem("data")),
  action
) => {
  if (action.type === "DELETE_PASSENGER") {
    const flightId = state.findIndex((item) => item.id === action.payload.fid);
    const passenger = state[flightId].passengers.findIndex(
      (item, index) => index === action.payload.pid
    );

    let updatedList = [...state];

    updatedList[flightId].passengers[passenger].name = "";
    updatedList[flightId].passengers[passenger].age = "";
    updatedList[flightId].passengers[passenger].address = "";
    updatedList[flightId].passengers[passenger].passportNo = "";
    updatedList[flightId].passengers[passenger].ancillary = "";
    updatedList[flightId].passengers[passenger].disabled = false;
    updatedList[flightId].passengers[passenger].infant = false;

    localStorage.setItem("data", JSON.stringify(updatedList));

    return updatedList;
  }

  if (action.type === "EDIT_PASSENGER") {
    const flightId = state.findIndex((item) => item.id === action.payload.id);
    const passenger = state[flightId].passengers.findIndex(
      (item) => item.seat === action.payload.seatNumber
    );

    let updatedList = [...state];

    updatedList[flightId].passengers[passenger].name = action.payload.name;
    updatedList[flightId].passengers[passenger].age = action.payload.age;
    updatedList[flightId].passengers[passenger].address =
      action.payload.address;
    updatedList[flightId].passengers[passenger].passportNo =
      action.payload.passport;
    updatedList[flightId].passengers[passenger].ancillary =
      action.payload.services;
    updatedList[flightId].passengers[passenger].disabled =
      action.payload.wheelChairValue;
    updatedList[flightId].passengers[passenger].infant =
      action.payload.infantValue;

    localStorage.setItem("data", JSON.stringify(updatedList));

    return updatedList;
  }

  if (action.type === "CHECK_IN") {
    const flightId = state.findIndex((item) => item.id === action.payload.fid);
    const passenger = state[flightId].passengers.findIndex(
      (item) => item.seat === action.payload.seat
    );

    let updatedList = [...state];
    if (updatedList[flightId].passengers[passenger].name.length !== 0) {
      updatedList[flightId].passengers[passenger].checkedIn =
        !action.payload.check;
    }
    localStorage.setItem("data", JSON.stringify(updatedList));
    return updatedList;
  }

  if (action.type === "LOGIN") {
    let updatedList = [...state];
    updatedList[0].loggedIn = true;
    updatedList[0].auth = !action.payload.access;
    localStorage.setItem("data", JSON.stringify(updatedList));
    return updatedList;
  }

  if (action.type === "LOGOUT") {
    let updatedList = [...state];
    updatedList[0].loggedIn = false;
    updatedList[0].auth = false;
    localStorage.setItem("data", JSON.stringify(updatedList));
    return updatedList;
  }

  return state;
};

const store = createStore(flightReducer);

export default store;
