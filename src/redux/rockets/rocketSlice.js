import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "https://api.spacexdata.com/v3/rockets";
const FETCH_ROCKETS = "FETCH_ROCKETS";

const initialState = {
  rockets: [],
  isLoading: true,
};

export const fetchRockets = createAsyncThunk(
  FETCH_ROCKETS,
  async (thunkAPI) => {
    try {
      const rockets = await axios.get(apiURL);
      return rockets.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Slice

const slice = createSlice({
  name: "rockets",
  initialState,
  reducers: {
    [fetchRockets.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRockets.fulfilled]: (state, action) => {
      state.isLoading = false;
      action.payload.map((rocket) => {
        return (state.rockets = {
          id: rocket.id,
          rocket_name: rocket.rocket_name,
          description: rocket.description,
          images: rocket.flickr_images,
        });
      });
    },
    [fetchRockets.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default slice.reducer;
