import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Allemployees = () => {
  const employees = useSelector(state => state.Employees);
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>Employee id</th>
            <th>Employee name</th>
            <th>Employee DOB</th>
            <th>Employee Department</th>
            <th>Employee Experience</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.fullName}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.department}</td>
                <td>{employee.experience} years</td>
                <td>
                  <Link to="/edit">Edit</Link>
                </td>
                <td>
                  <Link to="/delete">Delete</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Allemployees;
