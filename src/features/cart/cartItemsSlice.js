import { createSlice } from "@reduxjs/toolkit";

// TODO: Figure out how to persist state through refresh

const initialState = {
    cartItems: []
};

const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            console.log('addCartItem action.payload: ', action.payload);
            console.log('addCartItem state.cartItems: ', state.cartItems);
            const newItem = {
                id: state.cartItems.length + 1,
                ...action.payload
            };
            state.cartItems.push(newItem);
        },
        removeCartItem: (state, action) => {
            console.log('addCartItem action.payload: ', action.payload);
            console.log('addCartItem state.cartItems: ', state.cartItems);
            const { id } = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== id);
        },
        decreaseCartItemQuantity: (state, action) => {
            console.log('addCartItem action.payload: ', action.payload);
            console.log('addCartItem state.cartItems: ', state.cartItems);

            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            );
            const item = state.cartItems[itemIndex];

            if (item.quantity > 1) item.quantity -= 1;
            else if (item.quantity === 1) {
                const { id } = action.payload;
                state.cartItems = state.cartItems.filter(thisItem => thisItem.id !== id);
            }
        },
        increaseCartItemQuantity: (state, action) => {
            console.log('addCartItem action.payload: ', action.payload);
            console.log('addCartItem state.cartItems: ', state.cartItems);

            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            );
            const item = state.cartItems[itemIndex];

            item.quantity += 1;
        },
        clearCart: (state, action) => {
            console.log('addCartItem action.payload: ', action.payload);
            console.log('addCartItem state.cartItems: ', state.cartItems);
            state.cartItems = [];
            console.log('Empty Cart: ', state.cartItems);
        },
    }
});

export const cartItemsReducer = cartItemsSlice.reducer;

export const { addCartItem, removeCartItem, decreaseCartItemQuantity, increaseCartItemQuantity, clearCart } = cartItemsSlice.actions;

export const selectAllCartItems = (state) => {
    return state.cartItems.cartItems;
};

export const selectCartItemById = (id) => (state) => {
    return state.cartItems.cartItems.find(
        (item) => item.id === parseInt(id)
    );
};