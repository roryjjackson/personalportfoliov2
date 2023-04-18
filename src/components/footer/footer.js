import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
function Footer() {

  return (
      <div className='footer-container'>
        <div className='standard-block about'>
          <div>
            <h1>Don't be shy, get in touch</h1>
            <p>Feel free to reach out for collaborations or just a friendly hello. Email: roryjamesjackson@hotmail.com
            </p>
          </div>
          <ul>
            <button>Contact me</button>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faLinkedin} /></li>
            <li><FontAwesomeIcon icon={faGithub} /></li>
          </ul>
        </div>
      </div>
    )
}


export default Footer;
