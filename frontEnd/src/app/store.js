import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { productsApi, productsReducer } from '../features/shop/productsSlice';
import { cartItemsReducer } from '../features/cart/cartItemsSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: { 
        products: productsReducer,
        cartItems: cartItemsReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger], productsApi.middleware)
});

setupListeners(store.dispatch);