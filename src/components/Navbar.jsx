import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);

  const toggleTeamDropdown = () => {
    setIsTeamDropdownOpen(!isTeamDropdownOpen);
  };

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
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle" onClick={toggleTeamDropdown}>
              Team
              <span className="dropdown-arrow">▼</span>
            </button>
            <ul className={`dropdown-menu ${isTeamDropdownOpen ? 'show' : ''}`}>
              <li>
                <Link to="/trustees" className="dropdown-link">Trustees</Link>
              </li>
              <li>
                <Link to="/executive-members" className="dropdown-link">Executive Members</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact & Times</Link>
          </li>
          <li className="nav-item">
            <a href="https://pay.sumup.com/b2c/QP0H1UDY" target="_blank" rel="noopener noreferrer" className="donate-button">Donate</a>
          </li>
        </ul>
      </div>  
    </nav>
  );
};

export default Navbar;
