import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { browserQuestionsAsync, getBrowserQuestions } from '../../reducer'
import './body.scss';

export default function Body() {
  const dispatch = useDispatch();
  const browserQuestions = useSelector(getBrowserQuestions);
  console.log('ISAAC browserQuestions', browserQuestions);
  return (
    <div id="bq-body">
      <button onClick={() => dispatch(browserQuestionsAsync())}>
        Load Browser Questions
      </button>
    </div>
  );
}