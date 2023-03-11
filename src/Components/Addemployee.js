// All the necessary imports
import React, { useState } from "react";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/Employees/employeeActions";
import { useNavigate } from "react-router-dom";

// A functional component using ES6 arrow function syntax
const Addemployee = () => {
  // useNavigate hook for redirection to routes
  const navigate = useNavigate();

  // useDispatch hook for dispatching actions to reducer
  const dispatch = useDispatch();

  // All the states for inputs using useState hook.
  const [employeeFullName, setEmployeeFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState(0);

  // ES6 arrow functions for handling all the inputs onchange events
  const handleName = e => setEmployeeFullName(e.target.value);
  const handleDateOfBirth = e => setDateOfBirth(e.target.value);
  const handleDepartment = e => setDepartment(e.target.value);
  const handleExperience = e => setExperience(e.target.value);

  // For handling add employee form submission
  const handleSubmit = e => {
    e.preventDefault();

    // Creating new employee object
    const newEmployee = {
      // Generating unique id with shortid package
      id: shortid.generate(),
      fullName: employeeFullName,
      dateOfBirth: dateOfBirth,
      department: department,
      experience: experience,
    };

    // Dispatching addEmployee action to reducer
    dispatch(addEmployee(newEmployee));
    setEmployeeFullName("");
    setDateOfBirth("");
    setDepartment("");
    setExperience(0);
    alert("Employee Added");

    // Redirecting to all employees page
    navigate("/employee-management-react");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Using table for displaying inputs side by side */}
        <table>
          {/* Form heading */}
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
                {/* Input for full name */}
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
                {/* Input for date of birth with date-picker */}
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
                {/* Input for department */}
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
                {/* Input experience which only take numbers */}
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
                {/* Submit button */}
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
