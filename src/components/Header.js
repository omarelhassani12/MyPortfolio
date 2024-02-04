// Header.js

import React from 'react';
import './Header.css';
import logoImage from '../assets/img/Logo.png';
import meImage from '../assets/img/perssonalImg.jpg';

function Header() {
  return (
    <header>
      <div className="left">
        <img src={logoImage} alt="Logo" />
      </div>
      <div className="center">
        <h1>EL HASSANI Omar</h1>
        <p>Web & Mobile Developer</p>
      </div>
      <div className="right">
        <img src={meImage} alt="Me" />
      </div>
    </header>
  );
}

export default Header;
