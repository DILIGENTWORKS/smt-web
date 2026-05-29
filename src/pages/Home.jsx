import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-slider">
        <div className="slide">
          <img src="/SMTMurugan.jpeg" alt="Sri Sivasubramaniya Swami" className="hero-image" />
          <div className="hero-overlay">
            <h1>Sri Sivasubramaniya Swami Trust</h1>
            <p>Advancing Hindu Culture & Spirituality in Croydon</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <h2>Welcome to SMT Murugan Temple</h2>
          <p>
            The Sri Sivasubramaniya Swami Trust (Charity No: 1189088) is a registered Charitable 
            Incorporated Organisation in Croydon dedicated to advancing the Hindu religion, culture, 
            and spiritual values in the community.
          </p>
          <p>
            Our temple serves as a spiritual home for devotees, offering regular poojas, festivals, 
            and cultural events that celebrate our rich heritage. We are committed to preserving 
            and promoting Hindu traditions while fostering a sense of community and devotion.
          </p>
          <p>
            Join us in our divine mission to serve the community and spread the teachings of 
            Lord Murugan. Through our various activities and events, we aim to create a 
            spiritually enriching environment for all who seek blessings and guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
