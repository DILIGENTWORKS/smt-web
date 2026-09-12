import React from 'react';
import './ExecutiveMembers.css';

const ExecutiveMembers = () => {
  const executiveMembers = [
    'Sundar - Permanent EC (Founding trustee)',
    'Adalarasan Jayavelu',
    'Angai Maruthavanan',
    'Guru',
    'Jyothi Arun',
    'Loganathan Maruthaiveeran',
    'Meenakshi Sudhir',
    'PonSudhakar Kamaraj',
    'Pragatheeswaran Rathinavelu',
    'Rajeshwari Venkataraman',
    'RamPriya Gnanasekar',
    'Kalai Rekha Rajesh',
    'SivaPriya Shivaram',
    'Sugumaran Ponnusamy',
    'Sundar Pari',
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
