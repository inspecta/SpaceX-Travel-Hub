import { createSlice } from '@reduxjs/toolkit';

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

// Actions

const apiURL = 'https://api.spacexdata.com/v3/rockets';

const { rocketsSuccess } = slice.actions

export const fetchrockets = () => async dispatch => {
    try {
        await apiURL.get('/rockets')
            .then((response) => dispatch(rocketsSuccess(response.data)))
    }
    catch (e) {
        return console.error(e.message);
    }
}

export default slice.reducer

