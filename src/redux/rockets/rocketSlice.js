import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'https://api.spacexdata.com/v3/rockets';
const FETCH_ROCKETS = 'FETCH_ROCKETS';

const initialState = {
  rockets: [],
  status: null,
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
  },
);

// Slice

const slice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRockets: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            active: !rocket.active,
          };
        }
        return { ...rocket };
      }),
    }),
  },

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
      })

      .addCase(fetchRockets.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export const { bookRockets } = slice.actions;
export default slice.reducer;
