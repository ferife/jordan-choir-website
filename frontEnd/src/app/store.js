import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { productsApi, productsReducer } from '../features/shop/productsSlice';
import { cartItemsReducer } from '../features/cart/cartItemsSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { carouselApi } from '../features/carousel/carouselSlice';

export const store = configureStore({
    reducer: { 
        products: productsReducer,
        cartItems: cartItemsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [carouselApi.reducerPath]: carouselApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger], productsApi.middleware, carouselApi.middleware)
});

setupListeners(store.dispatch);