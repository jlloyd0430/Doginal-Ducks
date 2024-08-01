import React from 'react';
import './Roadmap.css'; // Import your CSS file for styling

const Roadmap = () => {
  // Example roadmap data
  const roadmapData = [
    { title: 'Phase 1', description: 'Initial release and setup.' },
    { title: 'Phase 2', description: 'Feature updates and improvements.' },
    { title: 'Phase 3', description: 'Community engagement and events.' },
    { title: 'Phase 4', description: 'Expansion and new partnerships.' },
  ];

  return (
    <div className="roadmap-container">
      <h2>Roadmap</h2>
      <div className="roadmap-timeline">
        {roadmapData.map((item, index) => (
          <div className="roadmap-card" key={index}>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            {index !== roadmapData.length - 1 && (
              <div className="timeline-line"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
