import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn about our mission and vision</p>
      </div>

      <div className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Trust</h2>
            <p>
              The Sri Sivasubramaniya Swami Trust (Charity No: 1189088) is a registered 
              Charitable Incorporated Organisation in Croydon, dedicated to advancing the 
              Hindu religion, culture, and spiritual values.
            </p>
            <p>
              Established with the blessings of Lord Murugan, our trust serves as a beacon 
              of spirituality and community service. We are committed to preserving and 
              promoting Hindu traditions while fostering a sense of unity and devotion 
              among all devotees.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              To provide a sacred space for worship, spiritual growth, and cultural 
              preservation. We aim to serve the community through religious ceremonies, 
              educational programs, and charitable activities that benefit society.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Vision</h2>
            <p>
              To be a center of excellence in Hindu spiritual practice and cultural 
              heritage, where devotees can find peace, guidance, and spiritual 
              enlightenment. We envision a community rooted in traditional values while 
              embracing the future.
            </p>
          </div>

          <div className="about-section">
            <h2>What We Offer</h2>
            <ul>
              <li>Daily poojas and archanas</li>
              <li>Special festival celebrations</li>
              <li>Spiritual discourses and classes</li>
              <li>Cultural programs and events</li>
              <li>Community service initiatives</li>
              <li>Religious education for children</li>
            </ul>
          </div>

          <div className="charity-info">
            <h3>Registered Charity Information</h3>
            <p><strong>Charity Number:</strong> 1189088</p>
            <p><strong>Type:</strong> Charitable Incorporated Organisation</p>
            <p><strong>Location:</strong> Croydon, United Kingdom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
