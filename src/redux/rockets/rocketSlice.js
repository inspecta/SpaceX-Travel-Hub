import { createSlice } from '@reduxjs/toolkit'

// Slice

const slice = createSlice({
    name: 'rockets',
    initialState: {
        rockets: []
    },
    reducers: {
        getRockets: (state, action) => {
            state.rockets = action.payload;
        },
    },
});

export default slice.reducer

