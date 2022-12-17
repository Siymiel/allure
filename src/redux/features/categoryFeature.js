import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: "categories",
    initialState: {
        categories: null,
        category: null,
        isFetching: false,
        error: false
    },
    reducers: {
        getCategoriesStart: (state) => {
            state.isFetching = true;
        },
        getCategoriesSuccess: (state, action) => {
            state.isFetching = false;
            state.categories = action.payload;
        },
        getCategoriesFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        getCategoryStart: (state) => {
            state.isFetching = true
        },
        getCategorySuccess: (state, action) => {
            state.isFetching = false;
            state.category = action.payload;
        },
        getCategoryFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const { 
    getCategoriesStart, 
    getCategoriesSuccess, 
    getCategoriesFailure, 
    getCategoryStart, 
    getCategorySuccess, 
    getCategoryFailure, 
} = categorySlice.actions;
export default categorySlice.reducer;