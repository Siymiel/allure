import { createSlice } from '@reduxjs/toolkit';

const slidersSlice = createSlice({
    name: "sliders",
    initialState: {
        sliders: null,
        isFetching: false,
        error: false
    },
    reducers: {
        getSlidersStart: (state) => {
            state.isFetching = true;
        },
        getSlidersSuccess: (state, action) => {
            state.isFetching = false;
            state.sliders = action.payload;
        },
        getSlidersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const { getSlidersStart, getSlidersSuccess, getSlidersFailure } = slidersSlice.actions;
export default slidersSlice.reducer;