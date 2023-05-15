import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Logo" />
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><a href="#">Home</a></li>
          <li className="header__nav-item"><a href="#">Math</a></li>
          <li className="header__nav-item"><a href="#">Grammar</a></li>
          <li className="header__nav-item"><a href="#">Chemistry</a></li>
          <li className="header__nav-item"><a href="#">Physics</a></li>
          <li className="header__nav-item"><a href="#">Translation</a></li>
          <li className="header__nav-item"><a href="#">Chatbot</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
