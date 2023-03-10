import { ADD_EMPLOYEE, EDIT_EMPLOYEE } from "./employeeTypes";

export const addEmployee = employee => {
  return {
    type: ADD_EMPLOYEE,
    payload: employee,
  };
};

export const editEmployee = id => {
  return {
    type: EDIT_EMPLOYEE,
    payload: id,
  }
}