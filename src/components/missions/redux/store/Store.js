import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../missionSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  }
});

export default store;