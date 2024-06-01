import React from 'react';
import '../css/Home.css';
import Navbar from "./Navbar"
import Footer from './Footer';
import sample from '../img/1.mp4';


const Home = () => {
  return (
    <div className="video-container">
      <Navbar />
      <video className="video-player" autoPlay loop muted>
        <source src={sample} type='video/mp4' />
      </video>
      <div className="container">
        <header>
          <h1>Viverplast</h1>
          <p>Your Trusted Source for Quality Agricultural Products</p>
        </header>
        <button className="explore-button">Explore</button>
      </div>
      <Footer />
    </div>
  );
};


export default Home;