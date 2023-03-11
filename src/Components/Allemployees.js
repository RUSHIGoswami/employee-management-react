import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../redux";
const Allemployees = () => {
  const employees = useSelector(state => state.Employees);
  const [deleteEmp, setDeleteEmp] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (deleteEmp) {
      dispatch(deleteEmployee(deleteEmp));
      setDeleteEmp("");
    }
  }, [deleteEmp, dispatch]);

  return (
    <>
      <table border={1}>
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
                  <Link to={`/employee-management-react/edit/${employee.id}`}>
                    Edit
                  </Link>
                </td>
                <td>
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
