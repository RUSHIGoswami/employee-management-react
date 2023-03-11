import React, { useState } from "react";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/Employees/employeeActions";
import { useNavigate } from "react-router-dom";
const Addemployee = () => {
  const [employeeFullName, setEmployeeFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState(0);

  const navigate = useNavigate();
  const handleName = e => setEmployeeFullName(e.target.value);
  const handleDateOfBirth = e => setDateOfBirth(e.target.value);
  const handleDepartment = e => setDepartment(e.target.value);
  const handleExperience = e => setExperience(e.target.value);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newEmployee = {
      id: shortid.generate(),
      fullName: employeeFullName,
      dateOfBirth: dateOfBirth,
      department: department,
      experience: experience,
    };
    dispatch(addEmployee(newEmployee));
    setEmployeeFullName("");
    setDateOfBirth("");
    setDepartment("");
    setExperience(0);
    alert("Employee Added");
    navigate("/employee-management-react");
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
                    required
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
                    required
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
                    required
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
                    required
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
