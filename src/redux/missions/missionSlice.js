import { createSlice } from '@reduxjs/toolkit';
import { fetchMissions } from './actions/missionActions';

const initialState = {
  missions: {},
  isLoading: true,
}

const MissionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMissions.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMissions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.missions = action.payload;
    },
    [fetchMissions.rejected]: (state) => {
      state.isLoading = false;
    }
  }
})

export default MissionsSlice.reducer;