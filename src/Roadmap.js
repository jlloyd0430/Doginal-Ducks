import React from 'react';
import './Roadmap.css'; // Import your CSS file for styling

const Roadmap = () => {
  // Example roadmap data
  const roadmapData = [
    { title: 'Day 01', description: 'Setup local dogecoin node and mint 215 doginal ducks.' },
    { title: 'Brainstorm', description: 'Get to know the community, release socials, Find out what the ecosystem needs or is lacking.' },
    { title: 'Dogepond.com', description: 'Build.First we start with Dogepond.com The first doginal event calendar platform. A place where users can post  there upcoming projects and gain exposure before there mint, also allowing other people to see whats coming up in the ecosystem,post are posted in parallel on X and by our bot in many servers,free to post , free marketing.' },
    { title: 'Discord Tools', description: 'We decided Doge was in need of many tools, so we build a toolbelt of various tools and offer them to anyone who might be in need as a service of dogepond. Holder verification, sales, wallet tracking, trending volume, dunes tracking, and so many other bots. ' },
    { title: 'Minting Tech', description: 'Doginals need a better minting experience plain and simple, we plan to deliver a mint and recieve automatic traditional minting service to DOGE.' },
    { title: 'Governance', description: 'Doge is a very community and culture oriented blockchain, we are creating governance and voting solutions for doginals, Drc-20 tokens, and Dunes we want to build a reliable governance system for everyone to utilize ' },
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
