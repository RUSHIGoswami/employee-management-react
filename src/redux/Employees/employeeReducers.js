import { ADD_EMPLOYEE, EDIT_EMPLOYEE, UPDATE_EMPLOYEE } from './employeeTypes';

const initialState = {
	Employees: [
		{
			id: '1',
			fullName: 'Rushi Goswami',
			dateOfBirth: '2002-05-25',
			department: 'Front-end (React)',
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

		case EDIT_EMPLOYEE:
			return {
				...state.Employees.filter(emp => emp.id === action.payload),
			};

		case UPDATE_EMPLOYEE:
			return {
				...state,
				Employees: state.Employees.map(employee => {
					if (employee.id === action.payload.id) {
						return { ...employee, ...action.payload };
					}
					return employee;
				}),
			};
		default:
			return state;
	}
};

export default employeeReducer;
