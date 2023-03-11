// Importing actions types
import {
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "./employeeTypes";

// action function for adding employee
export const addEmployee = employee => {
  return {
    type: ADD_EMPLOYEE,
    payload: employee,
  };
};

// action function for updating employee
export const updateEmployee = employee => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: employee,
  };
};

// action function for deleting employee
export const deleteEmployee = id => {
  return {
    type: DELETE_EMPLOYEE,
    payload: id,
  };
};
