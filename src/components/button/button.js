import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './button.scss';

/**
 * @param text Button text
 * @param icon Button icon from fontawesome library 
 */
const Button = ({text, icon}) => {
  return (
    <button className='bq-button'>
      <div className='bq-button-icon'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className='bq-button-text'>
        {text}
      </div>
    </button>
  )
};

export default Button;