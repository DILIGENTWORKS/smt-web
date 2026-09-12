import React from 'react';
import './ExecutiveMembers.css';

const ExecutiveMembers = () => {
  const executiveMembers = [
    'Sundar - Permanent EC (Founding trustee)',
    'Adal',
    'Angai',
    'Guru',
    'Jyothi Arun',
    'Loganathan Maruthaiveeran',
    'PonSudhakar',
    'Pragadeesh',
    'Rajee',
    'Rajee Logananthan',
    'Ram Priya',
    'Rekha',
    'SivaPriya',
    'Sugumar',
    'Sundar Pari',
    'Vatshala'
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
