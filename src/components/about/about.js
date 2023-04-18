import React from 'react';
import './about.css';

function About() {
  return (
      <div className='about-container'>
        <div className='standard-block'>
          <h1>Im Rory, a full stack developer doing shit</h1>
          <p>Ive been designing and implementing small apps for companies etc etc etc</p>
          <ul>
            <li>Github</li>
            <li>Instagram</li>
            <li>linkedIn</li>
            <li>Contact me</li>
          </ul>
        </div>
        <div className='standard-block'>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1681717882/28003-1671435885_irrmqv.webp" alt=""></img>
        </div>
      </div>
    )
}


export default About;
