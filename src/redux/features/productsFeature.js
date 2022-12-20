import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: null,
        product: null,
        latestProducts: null,
        isFetching: false,
        error: false
    },
    reducers: {
        getProductsStart: (state) => {
            state.isFetching = true;
        },
        getProductsSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductsFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        getProductStart: (state) => {
            state.isFetching = true
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.product = action.payload;
        },
        getProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        getLatestProductsStart: (state) => {
            state.isFetching = true
        },
        getLatestProductsSuccess: (state, action) => {
            state.isFetching = false;
            state.latestProducts = action.payload;
        },
        getLatestProductsFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { 
    getProductsStart, 
    getProductsSuccess, 
    getProductsFailure, 
    getProductStart, 
    getProductSuccess, 
    getProductFailure, 
    getLatestProductsStart,
    getLatestProductsSuccess,
    getLatestProductsFailure,
} = productSlice.actions;
export default productSlice.reducer;