import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sri Sivasubramaniya Swami Trust</h3>
          <p>Charity No: 1189088</p>
          <p>Registered Charitable Incorporated Organisation</p>
          <p>Croydon, United Kingdom</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact & Times</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: smt.croydon@gmail.com</p>
          <p>Croydon, UK</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sri Sivasubramaniya Swami Trust. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
