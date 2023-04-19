import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
      <div className='about-container'>
        <div className='standard-block about'>
          <div>
            <h1>Im Rory, a full stack developer working on multiple projects</h1>
            <p>Ruby, Rails, React, Javascript ES6, HTML5, SCSS, PostgreSQL, Heroku</p>
          </div>
          <div className='about-buttons'>
            <button>
              <a href="mailto:roryjamesjackson@hotmail.com" id="contact-button-a">Contact Me</a>
            </button>
            <ul>
              <a className="social-media-icon" href="https://github.com/roryjjackson" target="_blank" rel="noreferrer">
                <li id="github"><FontAwesomeIcon icon={faGithub} /></li>
              </a>
              <a className="social-media-icon" href="https://www.facebook.com/jacksonrory3/" target="_blank" rel="noreferrer">
                <li id="facebook"><FontAwesomeIcon icon={faFacebook} /></li>
              </a>
              <a className="social-media-icon" href="https://www.instagram.com/jackson_rory_/" target="_blank" rel="noreferrer">
                <li id="instagram"><FontAwesomeIcon icon={faInstagram} /></li>
              </a>
              <a className="social-media-icon" href="https://www.linkedin.com/in/roryjjackson/" target="_blank" rel="noreferrer">
                <li id="linkedin"><FontAwesomeIcon icon={faLinkedin} /></li>
              </a>
            </ul>
          </div>
        </div>
        <div className='standard-block img'>
        </div>
      </div>
    )
}


export default About;
