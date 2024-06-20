import React, { useState } from 'react';
import '../css/Navbar.css';

const Navbar = ({ setBool }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => setBool(0)}>Viverplast</div>
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
        <li onClick={() => setBool(1)}>Nosotros</li>
        <li onClick={() => setBool(2)}>Productos</li>
        <li onClick={() => setBool(3)}>Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;
