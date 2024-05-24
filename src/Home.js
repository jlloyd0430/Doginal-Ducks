// src/Home.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './App.css'; // Import custom styles

const Home = () => {
  const images = [
    "/ducks/1.png",
    "/ducks/2.png",
    "/ducks/3.png",
    "/ducks/4.png",
    "/ducks/5.png",
    "/ducks/6.png",
    "/ducks/7.png",
    "/ducks/8.png",
    "/ducks/97.png",
    "/ducks/10.png",
    "/ducks/11.png",
    "/ducks/22.png",
    "/ducks/13.png",
    "/ducks/24.png",
    "/ducks/17.png",
    "/ducks/28.png",
    "/ducks/80.png",
    "/ducks/200.png",
    "/ducks/111.png",
    "/ducks/202.png",
    "/ducks/68.png",
    "/ducks/76.png",
    "/ducks/77.png",
    "/ducks/78.png",
    "/ducks/98.png",
    "/ducks/213.png",
    "/ducks/206.png",
    "/ducks/212.png",
    // Add more image paths here
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Doginal Ducks</h1>
      <p className="home-description">This is the main landing page of Doginal Ducks.</p>
      <div className="carousel-container">
        <div className="carousel-track">
          {images.map((image, index) => (
            <img src={image} alt={`Duck ${index + 1}`} className="carousel-image" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;