import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import ChangePassword from './components/ChangePassword';
import Menu from './components/Menu';

const App = () => (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Tastebook</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/forgot">Forgot Password</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/change">Change Password</Link></li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/change" element={<ChangePassword />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  </Router>
);

export default App;
