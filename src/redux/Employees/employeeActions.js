import { ADD_EMPLOYEE } from "./employeeTypes";

export const addEmployee = employee => {
  return {
    type: ADD_EMPLOYEE,
    payload: employee,
  };
};
