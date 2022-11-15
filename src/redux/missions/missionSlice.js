import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_MISSIONS = 'redux/missions/FETCH_MISSIONS';
const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  isLoading: true,
}

export const FetchMissions = createAsyncThunk(
  FETCH_MISSIONS,
  async (thunkAPI) => {
    try {
      const missions = await axios.get(url);
      return missions.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const MissionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: {
    [FetchMissions.pending]: (state) => {
      state.isLoading = true;
    },
    [FetchMissions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.missions = action.payload;

    },
    [FetchMissions.rejected]: (state) => {
      state.isLoading = false;
    }
  }
})

export default MissionsSlice.reducer;