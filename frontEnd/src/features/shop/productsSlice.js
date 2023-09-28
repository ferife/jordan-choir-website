import { PRODUCTS } from "../../app/shared/PRODUCTS";
import { createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react"

//TODO: Set up useEffect for pulling data from Firestore to App

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getProducts: builder.query({
            async queryFn() {
                try {
                    const ref = collection(db, 'products');
                    const querySnapshot = await getDocs(ref);
                    let products = [];
                    console.log('ref', ref);
                    querySnapshot?.forEach((doc) => {
                        products.push({ id: doc.id, ...doc.data() });
                    });
                    return { data: products };
                } catch (error) {
                    console.error(error.message);
                    return { error: error.message };
                }
            },
            providesTags: ['Blogs'],
        }),
        getProduct: builder.query({
            async queryFn(id) {
                try {
                    const docRef = doc(db, 'products', id);
                    const snapshot = await getDoc(docRef);
                    return { data: snapshot.data() };
                } catch (error) {
                    console.error(error.message);
                    return { error: error.message };
                }
            },
            providesTags: ['Blog'],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductQuery
} = productsApi;

const initialState = {
    items: PRODUCTS,
    status: null
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetState: (state, action) => {
            state.products.items = action.payload;
        },
    },
});

export const productsReducer = productsSlice.reducer;
export const {
    resetState
} = productsSlice.actions;

export const selectAllProducts = (state) => {
    // console.log('selectAllProducts: ', state)
    return state.products.items;
};

export const selectProductById = (id) => (state) => {
    return state.products.items.find(
        (product) => product.id === parseInt(id)
    );
};