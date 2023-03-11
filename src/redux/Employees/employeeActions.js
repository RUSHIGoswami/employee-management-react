import { ADD_EMPLOYEE, EDIT_EMPLOYEE, UPDATE_EMPLOYEE } from './employeeTypes';

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
	};
};

export const updateEmployee = (employee) => {
	return {
		type: UPDATE_EMPLOYEE,
		payload: employee,
	};
};
