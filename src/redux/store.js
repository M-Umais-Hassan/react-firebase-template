import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userReducer from "./user";

const combineReducers = {
  userReducer,
};

const store = configureStore({
  reducer: combineReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
