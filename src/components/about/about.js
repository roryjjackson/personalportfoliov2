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
            <p>Ruby, Rails, React, Javascript ES6, PostgreSQL, Heroku</p>
          </div>
          <ul>
            <button>Contact me</button>
            <li id="instagram"><FontAwesomeIcon icon={faInstagram} /></li>
            <li id="facebook"><FontAwesomeIcon icon={faFacebook} /></li>
            <li id="linkedin"><FontAwesomeIcon icon={faLinkedin} /></li>
            <li id="github"><FontAwesomeIcon icon={faGithub} /></li>
          </ul>
        </div>
        <div className='standard-block img'>
        </div>
      </div>
    )
}


export default About;
