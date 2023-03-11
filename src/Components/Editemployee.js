import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editEmployee, updateEmployee } from '../redux';
import shortid from 'shortid';

const Editemployee = (
	employeeFullName,
	setEmployeeFullName,
	dateOfBirth,
	setDateOfBirth,
	department,
	setDepartment,
	experience,
	setExperience
) => {
	const params = useParams();
	const dispatch = useDispatch();
	const emp = dispatch(editEmployee(params.id));
	// const handleName = e => setEmployeeFullName(e.target.value);
	// const handleDateOfBirth = e => setDateOfBirth(e.target.value);
	// const handleDepartment = e => setDepartment(e.target.value);
	// const handleExperience = e => setExperience(e.target.value);
	const handleSubmit = e => {
		e.preventDefault();
		const updatedEmployee = {
			fullName: employeeFullName,
			dateOfBirth: dateOfBirth,
			department: department,
			experience: experience,
		};
		dispatch(updateEmployee(updatedEmployee));
		setEmployeeFullName('');
		setDateOfBirth('');
		setDepartment('');
		setExperience(0);
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<table>
					<thead>
						<tr>
							<td colSpan={2}>
								<div>
									<h3>Edit Employee</h3>
								</div>
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div>
									<label>Full name</label>
									<br />
									<input
										type='text'
										value={emp[0].fullName}
										name='fullName'
										placeholder='Enter your full name'
										// onChange={handleName}
									/>
								</div>
							</td>
							<td>
								<div>
									<label>Date of birth</label>
									<br />
									<input
										type='date'
										value={emp[0].dateOfBirth}
										name='DOB'
										placeholder='Enter your date of birth'
										// onChange={handleDateOfBirth}
									/>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div>
									<label>Department</label>
									<br />
									<input
										type='text'
										value={emp[0].department}
										name='department'
										placeholder='Enter your department'
										// onChange={handleDepartment}
									/>
								</div>
							</td>
							<td>
								<div>
									<label>Experience - (in years)</label>
									<br />
									<input
										type='number'
										value={emp[0].experience}
										name='experience'
										placeholder='Enter your experience'
										// onChange={handleExperience}
									/>
								</div>
							</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<button type='submit'>Update Employee</button>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</>
	);
};

export default Editemployee;
