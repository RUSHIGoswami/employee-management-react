// Necessary Imports
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployee } from "../redux";

// A functional component using ES6 arrow function syntax
const Editemployee = () => {
  // To retrieve url parameters
  const params = useParams();

  // For navigating to different route
  const navigate = useNavigate();

  // For dispatching action
  const dispatch = useDispatch();

  // Retrieving the Particular Employee from Redux store
  const employees = useSelector(state => state.Employees);
  const emp = employees.filter(emp => emp.id === params.id)[0];

  // All the states for inputs
  const [employeeFullName, setEmployeeFullName] = useState(emp.fullName);
  const [dateOfBirth, setDateOfBirth] = useState(emp.dateOfBirth);
  const [department, setDepartment] = useState(emp.department);
  const [experience, setExperience] = useState(emp.experience);

  // All the input onChange events
  const handleName = e => setEmployeeFullName(e.target.value);
  const handleDateOfBirth = e => setDateOfBirth(e.target.value);
  const handleDepartment = e => setDepartment(e.target.value);
  const handleExperience = e => setExperience(e.target.value);

  // function for handling form submission
  const handleSubmit = e => {
    e.preventDefault();
    // Creating employee object
    const updatedEmployee = {
      id: params.id,
      fullName: employeeFullName,
      dateOfBirth: dateOfBirth,
      department: department,
      experience: experience,
    };

    // Dispatching update employee action
    dispatch(updateEmployee(updatedEmployee));
    alert("Employee details updated");
    setEmployeeFullName("");
    setDateOfBirth("");
    setDepartment("");
    setExperience(0);

    // Redirecting to all employee page
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
                {/* Input for full name */}
                <div>
                  <label>Full name</label>
                  <br />
                  <input
                    type="text"
                    value={employeeFullName}
                    name="fullName"
                    placeholder="Enter your full name"
                    onChange={handleName}
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
                    value={dateOfBirth}
                    name="DOB"
                    placeholder="Enter your date of birth"
                    onChange={handleDateOfBirth}
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
                    value={department}
                    name="department"
                    placeholder="Enter your department"
                    onChange={handleDepartment}
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
                    value={experience}
                    name="experience"
                    placeholder="Enter your experience"
                    onChange={handleExperience}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                {/* Submit button */}
                <button type="submit">Update Employee</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default Editemployee;
