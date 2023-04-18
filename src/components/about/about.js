import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
      <div className='about-container'>
        <div className='standard-block about'>
          <h1>Im Rory, a full stack developer doing shit</h1>
          <p>Ive been designing and implementing small apps for companies etc etc etc</p>
          <ul>
            <li><FontAwesomeIcon icon={faInstagram} size="lg"/></li>
            <li><FontAwesomeIcon icon={faFacebook} size="lg"/></li>
            <li><FontAwesomeIcon icon={faLinkedin} size="lg"/></li>
            <li><FontAwesomeIcon icon={faGithub} size="lg"/></li>
          </ul>
        </div>
        <div className='standard-block'>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1681717882/28003-1671435885_irrmqv.webp" alt=""></img>
        </div>
      </div>
    )
}


export default About;
