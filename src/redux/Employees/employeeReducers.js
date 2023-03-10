import { ADD_EMPLOYEE } from "./employeeTypes";

const initialState = {
  Employees: [
    {
      id: 1,
      fullName: "Rushi Goswami",
      dateOfBirth: "2002-05-25",
      department: "Front-end (React)",
      experience: 1,
    },
  ],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        Employees: [...state.Employees, action.payload],
      };

    default:
      return state;
  }
};

export default employeeReducer;
