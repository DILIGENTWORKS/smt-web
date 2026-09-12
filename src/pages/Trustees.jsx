import React from 'react';
import './Trustees.css';

const Trustees = () => {
  const trustees = [
    'Basdeo Kaydoo',
    'Bhuvaneswaran Velayudhem',
    'Danon Lutchmee Kaydoo',
    'Gnanasekar Sundaramoorthy',
    'Kalyanaraman Gnanaprakasam',
    'Mahadevan Meikum Perumal',
    'Panneerselvam Thangavel',
    'Rajesh Pannirselvam',
    'Sampath Kumar Krishnasamy Kuppusamy',
    'Sethuraman Ganapathy',
    'Shivaram Kumar',
    'Srimathi Sankaragurukkal',
    'Srinivasan Krishnamoorthy'
  ];

  return (
    <div className="trustees">
      <div className="trustees-header">
        <h1>Our Trustees</h1>
        <p>The dedicated trustees guiding our temple's mission</p>
      </div>

      <div className="trustees-content">
        <div className="container">
          <div className="trustees-list">
            {trustees.map((trustee, index) => (
              <div key={index} className="trustee-item">
                <span className="trustee-number">{index + 1}.</span>
                <span className="trustee-name">{trustee}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trustees;
