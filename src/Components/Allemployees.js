// All the necessary imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../redux";

// A functional component using ES6 arrow function syntax
const Allemployees = () => {
  // Retrieving all the employees from Redux with useSelector hook.
  const employees = useSelector(state => state.Employees);

  // For dispatching the actions to redux reducer
  const dispatch = useDispatch();

  // To handle delete functionality
  const [deleteEmp, setDeleteEmp] = useState("");

  // useEffect hook which re-renders on every deleteEmp change and dispatching the action - deleteEmployee to reducer
  useEffect(() => {
    if (deleteEmp) {
      dispatch(deleteEmployee(deleteEmp));
      setDeleteEmp("");
    }
  }, [deleteEmp, dispatch]);

  return (
    <>
      {/* Using table to display all the employees */}
      <table border={1}>
        {/* Column headings */}
        <thead>
          <tr>
            <th>Employee name</th>
            <th>Employee DOB</th>
            <th>Employee Department</th>
            <th>Employee Experience</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Using map function to display all the employees in different rows */}
          {employees.map(employee => {
            return (
              <tr key={employee.id}>
                <td>{employee.fullName}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.department}</td>
                <td>
                  {employee.experience}{" "}
                  {employee.experience > 1 ? `years` : `year`}
                </td>
                <td>
                  {/* Router Link to Edit employee with id */}
                  <Link to={`/employee-management-react/edit/${employee.id}`}>
                    Edit
                  </Link>
                </td>
                <td>
                  {/* Handling delete employee with onClick event */}
                  <Link onClick={() => setDeleteEmp(employee.id)}>Delete</Link>
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
