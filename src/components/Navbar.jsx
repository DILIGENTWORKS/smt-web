import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <h1>SMT Murugan Temple</h1>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link">Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact & Times</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
