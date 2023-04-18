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
            <h1>Im Rory, a full stack developer doing shit</h1>
            <p>Ive been designing and implementing small apps for companies etc etc etc</p>
          </div>
          <ul>
            <button>Contact me</button>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faLinkedin} /></li>
            <li><FontAwesomeIcon icon={faGithub} /></li>
          </ul>
        </div>
        <div className='standard-block img'>
        </div>
      </div>
    )
}


export default About;
