import { createSlice } from "@reduxjs/toolkit";

// TODO: Figure out how to persist state through refresh

const initialState = {
    cartItemsArray: []
};

const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            console.log('addCartItem action.payload: ', action.payload);
            console.log('addCartItem state.cartItemsArray: ', state.cartItemsArray);
            const newItem = {
                id: state.cartItemsArray.length + 1,
                ...action.payload
            };
            state.cartItemsArray.push(newItem);
        },
        removeCartItem: (state, action) => {
            console.log('addCartItem action.payload: ', action.payload);
            console.log('addCartItem state.cartItemsArray: ', state.cartItemsArray);
            const { id } = action.payload;
            state.cartItemsArray = state.cartItemsArray.filter(item => item.id !== id);
        }
    }
});

export const cartItemsReducer = cartItemsSlice.reducer;

export const { addCartItem, removeCartItem } = cartItemsSlice.actions;

export const selectAllCartItems = (state) => {
    return state.cartItems.cartItemsArray;
};

export const selectCartItemById = (id) => (state) => {
    return state.cartItems.cartItemsArray.find(
        (item) => item.id === parseInt(id)
    );
};