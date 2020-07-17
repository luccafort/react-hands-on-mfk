import { combineReducers } from "@reduxjs/toolkit";
import { good } from "./good";

const rootReducer = combineReducers({
  good,
});

export default rootReducer;
