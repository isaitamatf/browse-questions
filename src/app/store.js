import { configureStore } from '@reduxjs/toolkit';
import { browserQuestionsSlice } from '../reducer';

const store = configureStore({
  reducer: {
    browserQuestions: browserQuestionsSlice.reducer,
  },
});

export { store };