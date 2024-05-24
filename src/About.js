import React from 'react';

const About = () => {
  return (
    <div>
      <h2>What</h2>
      <p>Doginal Ducks is an og cult of 215 pixel ducks on the Doge blockchain, This was the very first collection inscribed by @bitcoins_son. With Doginal Ducks the goal is to build CULTURE, using art, community , exclusivity, and our $Kwak to onboard, innovate, and bring the vibez, 15 ducks were Airdropped to the Noderunners for teaching there craft, the rest is public sale 69 DOGE. </p>
      <h2>Where</h2>
      <p>You can get a doginal duck on any of the verified Doginal/Drc-20 marketplaces!</p>
      <div className="images-container">
        <a href="https://doggy.market/nfts/doginalducks" target="_blank" rel="noopener noreferrer">
          <img src="/images/doggymarket.jpg" alt="DoggyMarket " className="about-image" />
        </a>
        <a href="https://doge.ordinalswallet.com/collection/doginal-ducks" target="_blank" rel="noopener noreferrer">
          <img src="/images/ordinalswallet.jpg" alt="OW" className="about-image" />
        </a>
      </div>
      <h2>How</h2>
      <p>Create a doginals wallet in just a few clicks on <a href="https://doggy.market/">doggy.market</a> , <a href='https://drc-20.org'>Doge Labs</a> , or <a href='https://doge.ordinalswallet.com/'>Ordinals Wallet</a></p>
    </div>
  );
};

export default About;
