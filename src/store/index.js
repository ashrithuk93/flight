import { createStore, combineReducers } from "redux";
import { userReducer } from "./users";
import { flightReducer } from "./flight";

const store = createStore(combineReducers({ flightReducer, userReducer }));

export default store;
