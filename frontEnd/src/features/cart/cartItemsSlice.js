import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    cartTotalQuantity: 0,
    cartTotalPrice: 0.0,
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
            toast.info('Item added to cart', { position: 'bottom-left' });
            state.cartItems.push(newItem);

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeCartItem: (state, action) => {
            console.log('addCartItem action.payload: ', action.payload);
            console.log('addCartItem state.cartItems: ', state.cartItems);
            const { id } = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== id);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
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
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        increaseCartItemQuantity: (state, action) => {
            console.log('addCartItem action.payload: ', action.payload);
            console.log('addCartItem state.cartItems: ', state.cartItems);

            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            );
            const item = state.cartItems[itemIndex];

            item.quantity += 1;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        clearCart: (state, action) => {
            console.log('addCartItem action.payload: ', action.payload);
            console.log('addCartItem state.cartItems: ', state.cartItems);
            state.cartItems = [];
            console.log('Empty Cart: ', state.cartItems);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        getTotals: (state, action) => {
            let { total, quantity } = state.cartItems.reduce(
                (acc, cur) => {
                    const { price, quantity, donation } = cur;
                        console.log('donation', donation);

                    const itemTotal = (donation
                        ? price
                        : price * quantity);

                    acc.total += itemTotal;
                    acc.quantity += (donation
                        ? 1
                        : quantity);

                    return acc;
                },
                {
                    total: 0.0,
                    quantity: 0,
                }
            );

            state.cartTotalQuantity = quantity;
            state.cartTotalPrice = total;

        },
    }
});

export const cartItemsReducer = cartItemsSlice.reducer;

export const {
    addCartItem,
    removeCartItem,
    decreaseCartItemQuantity,
    increaseCartItemQuantity,
    clearCart,
    getTotals
} = cartItemsSlice.actions;

export const selectAllCartItems = (state) => {
    return state.cartItems.cartItems;
};

export const selectCartItemById = (id) => (state) => {
    return state.cartItems.cartItems.find(
        (item) => item.id === parseInt(id)
    );
};