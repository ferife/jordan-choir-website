import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { productsReducer } from '../features/shop/productsSlice';
import { cartItemsReducer } from '../features/cart/cartItemsSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cartItems: cartItemsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
