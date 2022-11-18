import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_MISSIONS = 'redux/missions/FETCH_MISSIONS';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  isLoading: true,
};

export const FetchMissions = createAsyncThunk(
  FETCH_MISSIONS,
  async (thunkAPI) => {
    try {
      const missions = await axios.get(url);
      return missions.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const MissionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    HandleMissions: (state, action) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.id === action.payload) {
          return {
            ...mission,
            reserved: !mission.reserved,
          };
        }
        return { ...mission };
      }),
    }),
  },
  extraReducers: {
    [FetchMissions.pending]: (state) => {
      state.isLoading = true;
    },
    [FetchMissions.fulfilled]: (state, action) => {
      state.isLoading = false;

      const arr = [];
      action.payload.map((mission) => arr.push({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));

      state.missions = arr;
    },
    [FetchMissions.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { HandleMissions } = MissionsSlice.actions;
export default MissionsSlice.reducer;
