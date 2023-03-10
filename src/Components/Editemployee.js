import React from "react";

const Editemployee = () => {
  return (
    <>
      <form>
        <table>
          <tr>
            <td colSpan={2}>
              <div>
                <h3>Edit Employee</h3>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label>Full name</label>
                <br />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
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
                />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit">Update Employee</button>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};

export default Editemployee;
