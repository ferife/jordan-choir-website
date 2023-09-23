import { PRODUCTS } from "../../app/shared/PRODUCTS";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: PRODUCTS,
    status: null
};

// FIXME: Fix product data not working

// export const productsFetch = createAsyncThunk(
//     "products/productsFetch",
//     async () => {
//         const response = await axios.get(
//             "https://localhost:5000/products"
//         ).catch((error) => {
//             if (error.response) {
//                 // The request was made and the server responded with a status code
//                 console.log('response data: ', error.response.data);
//                 console.log('response status: ', error.response.status);
//                 console.log('response headers: ', error.response.headers);
//             } else if (error.request) {
//                 // The request was made but no response was received
//                 console.log('request: ',error.request);
//             } else {
//                 console.log('Error', error.message);
//             }
//             console.log(error.config);
//         });
//         console.log('response data: ', response?.data);
//         return response?.data;
//     }
// )

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducer: {},
    // extraReducers: {
    //     [productsFetch.pending]: (state, action) => {
    //         // immer
    //         state.status = "pending";
    //     },
    //     [productsFetch.fulfilled]: (state, action) => {
    //         state.items = action.payload;
    //         state.status = "success";
    //     },
    //     [productsFetch.rejected]: (state, action) => {
    //         state.status = "rejected";
    //     }
    // }
});

export const productsReducer = productsSlice.reducer;

export const selectAllProducts = (state) => {
    // console.log('selectAllProducts: ', state)
    return state.products.items;
};

export const selectProductById = (id) => (state) => {
    return state.products.items.find(
        (product) => product.id === parseInt(id)
    );
};