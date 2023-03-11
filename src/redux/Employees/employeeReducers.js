import {
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "./employeeTypes";

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

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        Employees: [...state.Employees, action.payload],
      };

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

    case DELETE_EMPLOYEE:
      return {
        ...state,
        Employees: state.Employees.filter(emp => emp.id !== action.payload),
      };
    default:
      return state;
  }
};

export default employeeReducer;
