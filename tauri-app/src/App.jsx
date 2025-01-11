import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Admin } from "./pages/Admin/Admin";
import { Student } from "./pages/Student/Student";
import { Teacher } from "./pages/Techer/Teacher";
import { NavBar } from "./pages/Navbar";
import { Login } from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import OpenSched from "./pages/Techer/OpenSched";
import Grades from "./pages/Techer/Grades";
import Home from "./pages/home/Home";
import StudentClass from "./pages/Student/StudentClass";

function App() {
  return (
    <Router>
      {<NavBar />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/openSched" element={<OpenSched />} />
        <Route path="/studentClass" element={<StudentClass />} />
        <Route path="/grades" element={<Grades />} />
      </Routes>
    </Router>
  );
}

export default App;
