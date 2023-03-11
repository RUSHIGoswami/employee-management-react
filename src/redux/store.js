// Necessary imports for redux store, middleware and devtools extension
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import employeeReducer from "./Employees/employeeReducers";

// Creating store with redux and middleware logger for logging state changes
const store = createStore(
  employeeReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
