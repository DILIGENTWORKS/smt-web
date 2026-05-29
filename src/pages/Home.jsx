import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/smt-web/SMTMurugan2.png',
      title: 'Sri Sivasubramaniya Swami Trust',
      subtitle: 'Advancing Hindu Culture & Spirituality in Croydon'
    },
    {
      image: '/smt-web/SMTMurugan.jpeg',
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
          
          <div className="vision-section">
            <h3>Vision Statement</h3>
            <p>
              To establish and nurture a spiritually vibrant Murugan Temple rooted in South Indian traditions and Agama principles, serving as a sacred center of worship, cultural preservation, community harmony, and Hindu spiritual learning for present and future generations in Croydon and across the United Kingdom.
            </p>
            <p className="inspiration">
              Inspired by the timeless values of<br />
              <strong>"யாதும் ஊரே யாவரும் கேளிர்"</strong> (Yadum Oore Yavarum Kelir) — "Every place is our home, and all people are our kin" —<br />
              and<br />
              <strong>"லோகா சமஸ்தா சுகினோ பவந்து"</strong> (Lokah Samastah Sukhino Bhavantu) — "May all beings everywhere be happy and free",
            </p>
            <p>
              the temple aspires to serve humanity with inclusiveness, compassion, devotion, and universal brotherhood.
            </p>
          </div>

          <div className="mission-section">
            <h3>Mission Statement</h3>
            <p>
              The Murugan Temple was founded by 14 like-minded devotees with the collective vision of creating a sacred spiritual home dedicated to Lord Murugan, guided by authentic South Indian temple traditions and Agama Shastras.
            </p>
            <p>Our mission is to:</p>
            <ul>
              <li>Provide a divine and spiritually uplifting place of worship for devotees and the wider community.</li>
              <li>Preserve, practice, and promote Hindu theology, values, traditions, and dharmic principles in the UK.</li>
              <li>Pass on the spiritual, cultural, and ethical foundations of Hinduism to future generations through active engagement and education.</li>
              <li>Foster an inclusive environment that welcomes people from all backgrounds, communities, and generations.</li>
              <li>Serve the broader community beyond religious functions by promoting cultural, educational, charitable, and social initiatives in and around the Croydon region.</li>
              <li>Encourage unity, compassion, seva (selfless service), and shared community responsibility.</li>
              <li>Build a sustainable institution that balances spirituality, tradition, culture, education, and community welfare.</li>
            </ul>
            <p>
              The temple stands not only as a place of worship, but also as a beacon of cultural continuity, spiritual growth, and community service for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
