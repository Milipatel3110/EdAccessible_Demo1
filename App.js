import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import InstructorCourses from './pages/InstructorCourses';
import StudentCourses from './pages/StudentCourses';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import AboutUs from './pages/Aboutus';
import SignUp from './pages/SignUp';
import AddClass from './pages/AddClass';
import Login from './pages/login';
import './App.css'; // Global styles

function App() {
  const [role, setRole] = useState('');

  useEffect(() => {
    const userRole = 'Student'; // Example; replace with real logic
    setRole(userRole);
  }, []);

  return (
    <Router>
      <div>
        {/* Updated navbar structure */}
        <nav className="navbar">
          <div className="logo">
            <Link to="/" className="logo-text">EdAccessible</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
          <div className="nav-icons">
            <Link to="/login" className="signin-btn">Login</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          {role === 'Instructor' ? (
            <Route path="/courses" element={<InstructorCourses />} />
          ) : (
            <Route path="/courses" element={<StudentCourses />} />
          )}
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-class" element={<AddClass />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
