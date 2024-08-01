import React from 'react';
import './Roadmap.css'; // Import your CSS file for styling

const Roadmap = () => {
  // Example roadmap data with completion status
  const roadmapData = [
    { title: 'Day 01', description: 'Setup local dogecoin node and mint 215 doginal ducks.', completed: true },
    { title: 'Brainstorm', description: 'Get to know the community, release socials, Find out what the ecosystem needs or is lacking.', completed: true },
    { title: 'Dogepond.com', description: 'Build.First we start with Dogepond.com The first doginal event calendar platform. A place where users can post  there upcoming projects and gain exposure before there mint, also allowing other people to see whats coming up in the ecosystem,post are posted in parallel on X and by our bot in many servers,free to post , free marketing.', completed: true },
    { title: 'Discord Tools', description: 'We decided Doge was in need of many tools, so we build a toolbelt of various tools and offer them to anyone who might be in need as a service of dogepond. Holder verification, sales, wallet tracking, trending volume, dunes tracking, and so many other bots.', completed: true },
    { title: 'DING', description: 'Create a Strong Utility for the Doginal Ducks, introducing DING the first wallet tracker on doge.', completed: true },
    { title: 'Minting Tech', description: 'Doginals need a better minting experience plain and simple, we plan to deliver a mint and recieve automatic traditional minting service to DOGE. We will continue to innovate and build more and more unique and diverse minting tech for the space to launch with.', completed: true },
    { title: 'Governance', description: 'Doge is a very community and culture oriented blockchain, we believe creating governance and voting solutions for doginals will be a very valuble use case for DAO based or community oriented projects,We are building governance for Doginals, Drc-20 tokens, and Dunes we want to build a reliable governance system for everyone to utilize on all fronts.', completed: true },
    { title: 'Dogepond upgrades', description: 'Add more market data, analytics and tools to dogepond, aswell as improve ui/ux wherever possible,', completed: true },
    { title: 'Upgrade Node', description: 'Setup a dogecoin node through VPS so we can offer much larger services and open up opportunities for us to build alot more things.', completed: true },
    { title: 'Rare Evo', description: 'Doginals is just over a year old, still not many people even know that we exist! but MANY people know DOGE, we will be attending Rare evo an irl multi-chain event this year in Las Vegas, this will be a great networking opportunity for us and also give the whole ecosystem exposure', completed: false },
    { title: 'Doginal Ducks expansion', description: 'Demonstrating and exercising the power of our new minting tech we will release a new and improved 2d collection of ducks on DOGE to now allow more people easier access to our tools and ecosystem. We will still hold exclusive utilities that weve always had for OG Doginal duck holders like Dingbot Pro, and other free and discounted benefits around our services.', completed: false },
    { title: 'Dogepond v2', description: 'More TBA.', completed: false },
    { title: 'Market?', description: 'stay tuned, we wont disappoint.', completed: false },
  ];

  return (
    <div className="roadmap-container">
      <h2>Roadmap</h2>
      <div className="roadmap-timeline">
        {roadmapData.map((item, index) => (
          <div className="roadmap-card" key={index}>
            <div className="card-content">
              <h3>
                {item.title}
                {item.completed && <span className="check-mark"> ✓</span>}
              </h3>
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
