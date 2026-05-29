import React from 'react';
import './Events.css';

const Events = () => {
  const events = [
    {
      id: 4,
      name: 'Vaikasi Visakam',
      date: '30/05/2026',
      description: 'Birth anniversary of Lord Murugan',
      type: 'Festival'
    },
    {
      id: 1,
      name: 'Maha Kumbabishikam',
      date: 'Coming Soon',
      description: 'Grand consecration ceremony - Phase 2 Construction',
      type: 'Special'
    },
    {
      id: 2,
      name: 'Ekathasi Vratham',
      date: 'Monthly',
      description: 'Sacred fasting day observed twice a month',
      type: 'Regular'
    },
    {
      id: 3,
      name: 'Prathosa Vratham',
      date: 'Bi-weekly',
      description: 'Special worship for Lord Shiva',
      type: 'Regular'
    },
    {
      id: 5,
      name: 'Full Moon Day Vratham',
      date: 'Monthly',
      description: 'Special prayers on Pournami day',
      type: 'Regular'
    },
    {
      id: 6,
      name: 'Thai Pusam',
      date: 'Annual',
      description: 'Major festival celebrating Lord Murugan',
      type: 'Festival'
    }
  ];

  return (
    <div className="events">
      <div className="events-header">
        <h1>Upcoming Events</h1>
        <p>Join us in celebrating divine festivals and special occasions</p>
      </div>

      <div className="events-container">
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className={`event-card ${event.type.toLowerCase()}`}>
              <div className="event-type">{event.type}</div>
              <h3 className="event-name">{event.name}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="events-cta">
        <h2>Book a Pooja Sponsorship</h2>
        <p>Sponsor a pooja for special occasions and receive blessings</p>
        <button className="cta-button">Contact Us for Sponsorship</button>
      </div>
    </div>
  );
};

export default Events;
