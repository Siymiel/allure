import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlist: [],
        whistlistTotal: 0
    },
    reducers: {
        addToWishlist: (state, action) => {
            state.whistlistTotal += 1;
            state.wishlist.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(item => item._id !== action.payload) 
            state.whistlistTotal -= 1;
        },
        clearWishlist: (state) => {
            state.wishlist = []
            state.whistlistTotal = 0
        }
    }
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;