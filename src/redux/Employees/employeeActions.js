import {
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "./employeeTypes";

export const addEmployee = employee => {
  return {
    type: ADD_EMPLOYEE,
    payload: employee,
  };
};

export const updateEmployee = employee => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: employee,
  };
};

export const deleteEmployee = id => {
  return {
    type: DELETE_EMPLOYEE,
    payload: id,
  };
};
