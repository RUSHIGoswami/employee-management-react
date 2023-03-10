// import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Addemployee from "./Components/Addemployee";
import Allemployees from "./Components/Allemployees";
import Editemployee from "./Components/Editemployee";
import Notfound from "./Components/Notfound";
import styles from "./Css/styles.module.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useState } from "react";

function App() {
  const [employeeFullName, setEmployeeFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState(0);
  const [emp, setEmp] = useState({});
  return (
    <Provider store={store}>
      <BrowserRouter style={styles}>
        <nav>
          <ul>
            <li>
              <Link to="/">All Employees</Link>
            </li>
            <li>
              <Link to="/add">Add Employee</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Allemployees />} />
          <Route
            path="/add"
            element={
              <Addemployee
                employeeFullName={employeeFullName}
                setEmployeeFullName={setEmployeeFullName}
                dateOfBirth={dateOfBirth}
                setDateOfBirth={setDateOfBirth}
                department={department}
                setDepartment={setDepartment}
                experience={experience}
                setExperience={setExperience}
                emp={emp}
                setEmp={setEmp}
              />
            }
          />
          <Route path="/edit" element={<Editemployee />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
