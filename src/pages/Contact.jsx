import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Us & Opening Times</h1>
        <p>Get in touch with us or visit our temple</p>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-item">
                <h3>📍 Address</h3>
                <p>Holy Saviour Church</p>
                <p>115, St. Saviours Road</p>
                <p>CR0 2XF</p>
              </div>

              <div className="info-item">
                <h3>📞 Phone</h3>
                <p>+44 7990 760189</p>
              </div>

              <div className="info-item">
                <h3>✉️ Email</h3>
                <p>smt.croydon@gmail.com</p>
              </div>

              <div className="info-item">
                <h3>🎫 Charity Number</h3>
                <p>1189088</p>
              </div>
            </div>

            <div className="opening-hours">
              <h2>Opening Times</h2>
              <div className="hours-table">
                <div className="hours-row special">
                  <span className="day">Every Saturday</span>
                  <span className="time">6:30 PM - 10:00 PM</span>
                </div>
              </div>

              <div className="special-note">
                <p><strong>Note:</strong> Temple is open every Saturday from 6:30 PM to 10:00 PM. 
                For special festivals and events, please check our Events page or contact us for specific timings.</p>
              </div>
            </div>
          </div>

          <div className="map-section">
            <h2>Find Us</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.1234567890123!2d-0.1234567890123456!3d51.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876075f5a5a5a5a%3A0x5a5a5a5a5a5a5a5a!2sHoly+Saviour+Church!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Holy Saviour Church Location"
              ></iframe>
            </div>
            <p className="map-address">
              <strong>Holy Saviour Church</strong><br />
              115, St. Saviours Road<br />
              Croydon, CR0 2XF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
