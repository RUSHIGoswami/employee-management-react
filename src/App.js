import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Addemployee from "./Components/Addemployee";
import Allemployees from "./Components/Allemployees";
import Editemployee from "./Components/Editemployee";
import Notfound from "./Components/Notfound";
import styles from "./Css/styles.module.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
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
          <Route path="/add" element={<Addemployee />} />
          <Route path="/edit/:id" element={<Editemployee />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
