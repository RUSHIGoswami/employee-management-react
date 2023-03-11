// Importing action types
import {
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "./employeeTypes";

// creating initial state object containing array of employee objects
const initialState = {
  Employees: [
    {
      id: "1",
      fullName: "Mayur Goswami",
      dateOfBirth: "1971-05-31",
      department: "Department of Post India",
      experience: 30,
    },
    {
      id: "2",
      fullName: "Rushi Goswami",
      dateOfBirth: "2002-05-25",
      department: "Front-end (React)",
      experience: 1,
    },
  ],
};

// reducer function for executing every action functions and returning state object
const employeeReducer = (state = initialState, action) => {
  // switch cases for different actions
  switch (action.type) {
    // Add employee action
    case ADD_EMPLOYEE:
      return {
        ...state,
        Employees: [...state.Employees, action.payload],
      };

    // Update employee action - using map function to find employee and updating the employee object with rest operator
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        Employees: state.Employees.map(employee => {
          if (employee.id === action.payload.id) {
            return { ...action.payload };
          }
          return employee;
        }),
      };

    // Delete employee - using filter function to remove the employee object from array
    case DELETE_EMPLOYEE:
      return {
        ...state,
        Employees: state.Employees.filter(emp => emp.id !== action.payload),
      };

    // Default case
    default:
      return state;
  }
};

export default employeeReducer;
