import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Body, Header } from './components';
import { browserQuestionsAsync, getBrowserQuestions } from './reducer';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(browserQuestionsAsync());
  }, [dispatch]);

  return (
    <div id="App">
      <Header />
      <Body browserQuestions={useSelector(getBrowserQuestions)}/>
    </div>
  );
}

export default App;
