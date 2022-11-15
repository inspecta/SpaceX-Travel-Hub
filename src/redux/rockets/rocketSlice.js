import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'https://api.spacexdata.com/v3/rockets';
const FETCH_ROCKETS = 'FETCH_ROCKETS';
// Slice

const slice = createSlice({
    name: 'rockets',
    initialState: {
        rockets: [],
    },
    reducers: {
        rocketsSuccess: (state, action) => {
            state.rockets = action.payload;
            state.isLoading = false;
        },
    },
});

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
    const { data } = await axios.get(apiURL);
    return { rockets: Object.entries(data) };
  });

export default slice.reducer

