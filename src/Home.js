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
    "/ducks/9.png",
    "/ducks/10.png",
    "/ducks/11.png",
    "/ducks/22.png",
    "/ducks/13.png",
    "/ducks/14.png",
    "/ducks/16.png",
    "/ducks/28.png",
    "/ducks/17.png",
    "/ducks/18.png",
    "/ducks/19.png",
    "/ducks/20.png",
    "/ducks/21.png",
    "/ducks/22.png",
    "/ducks/23.png",
    "/ducks/24.png",
    "/ducks/25.png",
    "/ducks/26.png",
    "/ducks/27.png",
    "/ducks/28.png",
    // Add more image paths here
  ];

  return (
    <div className="home-container press-start-2p-regular">
      <div className="background-image">
        <h1 className="home-title">Welcome to The Krypt</h1>
        <p className="home-description">This is the Land of Doginal Ducks.</p>

    <div className="button-container">
      <p> Join us </p>
          <a href="https://doggy.market/nfts/doginalducks" className="buy-now-button">Get Ducked</a>
          <a href="" className="buy-now-button">Get $Kwak</a>
        </div>

        <div className="carousel-container">
          <div className="carousel-track">
            {images.map((image, index) => (
              <img src={image} alt={`Duck ${index + 1}`} className="carousel-image" key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

