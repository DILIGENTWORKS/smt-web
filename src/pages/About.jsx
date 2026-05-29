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
            <h2>Our Vision</h2>
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

          <div className="about-section">
            <h2>Our Mission</h2>
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
