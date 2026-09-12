import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const toggleTeamDropdown = () => {
    setIsTeamDropdownOpen(!isTeamDropdownOpen);
  };

  const closeDropdown = () => {
    setIsTeamDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <h1>SMT Murugan Temple</h1>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}>Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
          </li>
          <li className="nav-item dropdown" ref={dropdownRef}>
            <button 
              className={`nav-link dropdown-toggle ${location.pathname === '/trustees' || location.pathname === '/executive-members' ? 'active' : ''}`} 
              onClick={toggleTeamDropdown}
            >
              Team
              <span className="dropdown-arrow">▼</span>
            </button>
            <ul className={`dropdown-menu ${isTeamDropdownOpen ? 'show' : ''}`}>
              <li>
                <Link to="/trustees" className="dropdown-link" onClick={closeDropdown}>Trustees</Link>
              </li>
              <li>
                <Link to="/executive-members" className="dropdown-link" onClick={closeDropdown}>Executive Members</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact & Times</Link>
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
