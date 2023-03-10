import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editEmployee } from '../redux'

const Editemployee = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const emp = dispatch(editEmployee(params.id))

	return (
		<>
			<form>
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
										value={emp.fullName}
										name='fullName'
										placeholder='Enter your full name'
									/>
								</div>
							</td>
							<td>
								<div>
									<label>Date of birth</label>
									<br />
									<input
										type='date'
										value={emp.dateOfBirth}
										name='DOB'
										placeholder='Enter your date of birth'
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
										value={emp.department}
										name='department'
										placeholder='Enter your department'
									/>
								</div>
							</td>
							<td>
								<div>
									<label>Experience - (in years)</label>
									<br />
									<input
										type='number'
										value={emp.experience}
										name='experience'
										placeholder='Enter your experience'
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
	)
}

export default Editemployee
