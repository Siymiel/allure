import { createSlice } from '@reduxjs/toolkit';

const storeSlice = createSlice({
    name: "stores",
    initialState: {
        stores: null,
        store: null,
        isFetching: false,
        error: false
    },
    reducers: {
        getStoresStart: (state) => {
            state.isFetching = true;
        },
        getStoresSuccess: (state, action) => {
            state.isFetching = false;
            state.stores = action.payload;
        },
        getStoresFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        getStoreStart: (state) => {
            state.isFetching = true
        },
        getStoreSuccess: (state, action) => {
            state.isFetching = false;
            state.store = action.payload;
        },
        getStoreFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const { 
    getStoresStart, 
    getStoresSuccess, 
    getStoresFailure, 
    getStoreStart, 
    getStoreSuccess, 
    getStoreFailure, 
} = storeSlice.actions;
export default storeSlice.reducer;