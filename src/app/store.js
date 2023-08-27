import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '../features/shop/productsSlice';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
