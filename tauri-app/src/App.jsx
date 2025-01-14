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
import TeacherLogin from "./pages/Techer/TeacherLogin";
import StudetSignup from "./pages/Student/StudetSignup";
import AdminSignUp from "./pages/Admin/AdminSignUp";
import StudentView from "./pages/Admin/StudentView";
import TeacherView from "./pages/Admin/TeacherView";
import SectionView from "./pages/Admin/SectionView";
import CourseView from "./pages/Admin/CourseView";

function App() {
  return (
    <Router>
      {<NavBar />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/teacherlogin" element={<TeacherLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-signup" element={<AdminSignUp />} />
        <Route path="/studentView" element={<StudentView />} />
        <Route path="/teacherView" element={<TeacherView />} />
        <Route path="/courseView" element={<CourseView />} />
        <Route path="/sectionView" element={<SectionView />} />

        <Route path="/student" element={<Student />} />
        <Route path="/student-signup" element={<StudetSignup />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/openSched" element={<OpenSched />} />
        <Route path="/studentClass" element={<StudentClass />} />
        <Route path="/grades" element={<Grades />} />
      </Routes>
    </Router>
  );
}

export default App;
