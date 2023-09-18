import { PRODUCTS } from "../../app/shared/PRODUCTS";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null
};

// FIXME: Fix images not working

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        const response = await axios.get(
            "https://localhost:5000/products"
        );
        return response?.data;
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducer: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            // immer
            state.status = "pending";
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "success";
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected";
        },
    },
});

export const productsReducer = productsSlice.reducer;

export const selectAllProducts = (state) => {
    console.log('selectAllProducts: ', state)
    return state.products.items;
};

export const selectProductById = (id) => (state) => {
    return state.products.items.find(
        (product) => product.id === parseInt(id)
    );
};