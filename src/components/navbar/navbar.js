import React, { useState } from "react";
import './navbar.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  };

  const buttonToggle = () => {
    setIsOpen(true)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Rory Jackson
        </a>
        <button className="navbar-toggle" onClick={buttonToggle}>
          <FontAwesomeIcon icon={faBars} size="lg" className='bars'/>
        </button>
        <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
          <li className="navbar-item">
            <a href="#home" className="navbar-link" onClick={toggle}>
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link" onClick={toggle}>
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={toggle}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
