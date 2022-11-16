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
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const IsSucessful = state;
        IsSucessful.status = 'success';
        IsSucessful.rockets = action.payload;

        const rocketData = [];
        action.payload.map((rocket) => rocketData.push({
          id: rocket.id,
          rocketName: rocket.rocket_name,
          rocketDesc: rocket.description,
          rocketImages: rocket.flickr_images,
          reserved: false,
        }));
        IsSucessful.rockets = rocketData;
      })
      .addCase(fetchRockets.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});


export default slice.reducer;
