import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/SMTMurugan2.png',
      title: 'Sri Sivasubramaniya Swami Trust',
      subtitle: 'Advancing Hindu Culture & Spirituality in Croydon'
    },
    {
      image: '/SMTMurugan.jpeg',
      title: 'Sri Sivasubramaniya Swami Trust',
      subtitle: 'Advancing Hindu Culture & Spirituality in Croydon'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="home">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.title} className="hero-image" />
            <div className="hero-overlay">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
        <button className="slider-arrow prev" onClick={prevSlide}>&#10094;</button>
        <button className="slider-arrow next" onClick={nextSlide}>&#10095;</button>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
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
