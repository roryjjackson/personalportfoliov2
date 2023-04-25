import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
function Footer() {

  return (
      <div className='footer-container' id="contact">
        <div className='standard-block about'>
          <div>
            <h1>Don't be shy, get in touch</h1>
            <p>Feel free to reach out for collaborations or just a friendly hello by emailing me: roryjamesjackson@hotmail.com</p>
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
              {/* <a className="social-media-icon" href="https://www.linkedin.com/in/roryjjackson/" target="_blank" rel="noreferrer">
                <li id="linkedin"><FontAwesomeIcon icon={faLinkedin} /></li>
              </a> */}
            </ul>
          </div>
        </div>
      </div>
    )
}


export default Footer;
