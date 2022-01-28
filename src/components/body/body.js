import React from 'react';
import { BROWSE_QUESTIONS_TEXT } from '../../constants';
import './body.scss';

/**
 * @param browserQuestions Data from the API
 */
export default function Body({browserQuestions}) {
  return (
    <div id="bq-body">
      <div className='bq-body-text'>
        {BROWSE_QUESTIONS_TEXT}
      </div>
    </div>
  );
}