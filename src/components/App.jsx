import React from 'react';
import '../css/App.css';
import Navbar from "./Navbar"
import Footer from './Footer';
import About from './About';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import sample from '../img/1.mp4';
import { useState } from 'react';

const App = () => {
  const [bool, setBool] = useState(0)

  const setComponent = () => {
    return [<Home setBool={setBool}/>, <About/>, <Products/>, <Contact/>][bool]
  }
  return (
    <div className="video-container">
      <Navbar setBool={setBool}/>
      <video className="video-player" autoPlay loop muted>
        <source src={sample} type='video/mp4' />
      </video>
      {setComponent()}
      <Footer />
    </div>
  );
};


export default App;