import axios  from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../constants';

const loadBrowserQuestions = () => {
  return axios.get(API_URL).then(response => response);
};

const browserQuestionsAsync = createAsyncThunk(
  'browserQuestions/loadBrowserQuestions',
  async () => {
    const response = await loadBrowserQuestions();
    return response.data.results;
  }
);

const browserQuestionsSlice = createSlice({
  name: 'browserQuestions',
  initialState: {
    results: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(browserQuestionsAsync.fulfilled, (state, action) => {
        state.results = action.payload;
      });
  },
});

const getBrowserQuestions = (state) => state.browserQuestions.results;

export { browserQuestionsAsync, browserQuestionsSlice, getBrowserQuestions };
