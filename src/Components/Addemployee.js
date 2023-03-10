import React from "react";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/Employees/employeeActions";
const Addemployee = ({
  employeeFullName,
  setEmployeeFullName,
  dateOfBirth,
  setDateOfBirth,
  department,
  setDepartment,
  experience,
  setExperience,
  emp,
  setEmp,
}) => {
  const dispatch = useDispatch();
  const handleName = e => setEmployeeFullName(e.target.value);
  const handleDateOfBirth = e => setDateOfBirth(e.target.value);
  const handleDepartment = e => setDepartment(e.target.value);
  const handleExperience = e => setExperience(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    const newEmployee = {
      id: shortid.generate(),
      fullName: employeeFullName,
      dateOfBirth: dateOfBirth,
      department: department,
      experience: experience,
    };
    setEmp(empl => ({ ...empl, ...newEmployee }));
    console.log(emp);
    dispatch(addEmployee(emp));
    setEmployeeFullName("");
    setDateOfBirth("");
    setDepartment("");
    setExperience(0);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>
                <div>
                  <h3>Add Employees</h3>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <label>Full name</label>
                  <br />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={employeeFullName}
                    onChange={handleName}
                  />
                </div>
              </td>
              <td>
                <div>
                  <label>Date of birth</label>
                  <br />
                  <input
                    type="date"
                    name="DOB"
                    placeholder="Enter your date of birth"
                    value={dateOfBirth}
                    onChange={handleDateOfBirth}
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
                    type="text"
                    name="department"
                    placeholder="Enter your department"
                    value={department}
                    onChange={handleDepartment}
                  />
                </div>
              </td>
              <td>
                <div>
                  <label>Experience - (in years)</label>
                  <br />
                  <input
                    type="number"
                    name="experience"
                    placeholder="Enter your experience"
                    value={experience}
                    onChange={handleExperience}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button type="submit">Add Employee</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default Addemployee;
