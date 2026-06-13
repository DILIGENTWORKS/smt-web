import React, { useState, useEffect } from 'react';
import './TempleNotice.css';

const TempleNotice = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show notice on page load
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="temple-notice-overlay">
      <div className="temple-notice-modal">
        <button className="notice-close" onClick={handleClose}>&times;</button>
        <div className="notice-content">
          <h2>🙏 Temple Notice</h2>
          <div className="notice-message">
            <p>We are in the process of starting <strong>Thiru-kovil for 7 days a week</strong>.</p>
            <p>If possible for you to support us financially then please do so.</p>
          </div>
          
          <div className="donation-options">
            <h3>How can you help us financially?</h3>
            
            <div className="donation-option">
              <div className="option-number">1</div>
              <div className="option-content">
                <p>Hit <strong>Donate</strong> button to donate</p>
                <a href="https://pay.sumup.com/b2c/QP0H1UDY" target="_blank" rel="noopener noreferrer" className="donate-button-inline">Donate Now</a>
              </div>
            </div>
            
            <div className="donation-option">
              <div className="option-number">2</div>
              <div className="option-content">
                <p>For One-time Bank Transfer for donations or Standing Order for your weekly Sankalpam:</p>
                <div className="bank-details">
                  <p><strong>Account Name:</strong> SRI SIVASUBRAMANIYA SWAMI TRUST</p>
                  <p><strong>Account Number:</strong> 37703788</p>
                  <p><strong>Sort Code:</strong> 23-05-80</p>
                </div>
              </div>
            </div>
          </div>
          
          <button className="notice-dismiss" onClick={handleClose}>
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
};

export default TempleNotice;
