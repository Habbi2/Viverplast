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
        <li onClick={() => setBool(0)}>Home</li>
        <li onClick={() => setBool(1)}>About</li>
        <li onClick={() => setBool(2)}>Products</li>
        <li onClick={() => setBool(3)}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
