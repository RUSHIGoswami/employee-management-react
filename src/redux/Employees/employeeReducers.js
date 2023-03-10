import { ADD_EMPLOYEE, EDIT_EMPLOYEE } from './employeeTypes'

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
}

const employeeReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_EMPLOYEE:
			return {
				...state,
				Employees: [...state.Employees, action.payload],
			}

		case EDIT_EMPLOYEE:
			let emp = state.Employees
			console.log(emp[0].id)
			console.log(emp.find((e) => e.id === ''))
			return state

		default:
			return state
	}
}

export default employeeReducer
