import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployee } from "../redux";

const Editemployee = () => {
  const params = useParams();
  const employees = useSelector(state => state.Employees);
  const emp = employees.filter(emp => emp.id === params.id)[0];

  const navigate = useNavigate();
  const [employeeFullName, setEmployeeFullName] = useState(emp.fullName);
  const [dateOfBirth, setDateOfBirth] = useState(emp.dateOfBirth);
  const [department, setDepartment] = useState(emp.department);
  const [experience, setExperience] = useState(emp.experience);
  const handleName = e => setEmployeeFullName(e.target.value);
  const handleDateOfBirth = e => setDateOfBirth(e.target.value);
  const handleDepartment = e => setDepartment(e.target.value);
  const handleExperience = e => setExperience(e.target.value);

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const updatedEmployee = {
      id: params.id,
      fullName: employeeFullName,
      dateOfBirth: dateOfBirth,
      department: department,
      experience: experience,
    };
    dispatch(updateEmployee(updatedEmployee));
    setEmployeeFullName("");
    setDateOfBirth("");
    setDepartment("");
    setExperience(0);
    alert("Employee details updated");
    navigate("/");
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
                    type="text"
                    value={employeeFullName}
                    name="fullName"
                    placeholder="Enter your full name"
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
