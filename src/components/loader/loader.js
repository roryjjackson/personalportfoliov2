import React from 'react';
import './loader.css';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Loader() {
  return (
    <div className="loader">
      <div>
        <div><FontAwesomeIcon icon={faGear} spin id="cog-spinner"/></div>
      </div>
    </div>
  );
}

export default Loader;
