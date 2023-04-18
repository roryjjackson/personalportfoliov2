import React, { useState } from "react";
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faBars } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Rory Jackson
        </a>
        <button className="navbar-toggle" onClick={toggle}>
        <FontAwesomeIcon icon={faBars} size="lg" />
        {/* <FontAwesomeIcon icon={faSpinner} spin size="lg" /> */}
        </button>
        <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
