import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItemsArray: []
};

const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newItem = {
                id: state.cartItemsArray.length + 1,
                ...action.payload
            };
            state.cartItemsArray.push(newItem);
        },
        removeCartItem: (state, action) => {
            const { id } = action.payload;
            state.cartItemsArray = state.cartItemsArray.filter(item => item.id !== id);
        }
    }
});

export const cartItemsReducer = cartItemsSlice.reducer;

export const { addCartItem, removeCartItem } = cartItemsSlice.actions;

export const selectAllItems = (state) => {
    return state.cartItems.cartItemsArray;
};

export const selectCartItemById = (id) => (state) => {
    return state.cartItems.cartItemsArray.find(
        (item) => item.id === parseInt(id)
    );
};