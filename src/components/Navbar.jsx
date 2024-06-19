import React, { useState } from 'react';
import '../css/Navbar.css';

const Navbar = ({ setBool }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Viverplast</div>
      <button
        className={`menu-button ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
      </button>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li onClick={() => setBool(true)}>Home</li>
        <li onClick={() => setBool(false)}>About</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
