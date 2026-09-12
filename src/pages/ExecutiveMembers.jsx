import React from 'react';
import './ExecutiveMembers.css';

const ExecutiveMembers = () => {
  const executiveMembers = [
    'Sundar Venkataraman - Permanent EC (Founding trustee)',
    'Adalarasan Jayavelu',
    'Angai Srini',
    'Guru Baskaran',
    'Jyothi Arun',
    'Loganathan Maruthaiveeran',
    'Meenakshi Sudhir',
    'Ponsudhakar Kamaraj',
    'Pragatheeswaran Rathinavelu',
    'Priya Kalyan',
    'Rajeshwari Venkataraman',
    'Ramalakshmi Mahadevan',
    'RamPriya Gnanasekar',
    'Kalai Rekha Rajesh',
    'Sivapriya Shivaram',
    'Sugumaran Ponnusamy',
    'Sundar Pari',
    'SukhiPriya',
    'Vatshala Arun'
  ];

  return (
    <div className="executive-members">
      <div className="executive-members-header">
        <h1>Executive Members</h1>
        <p>The dedicated executive committee members serving our temple</p>
      </div>

      <div className="executive-members-content">
        <div className="container">
          <div className="executive-members-list">
            {executiveMembers.map((member, index) => (
              <div key={index} className="executive-member-item">
                <span className="executive-member-number">{index + 1}.</span>
                <span className="executive-member-name">{member}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveMembers;
