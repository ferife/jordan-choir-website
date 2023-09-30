import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react"

export const carouselApi = createApi({
    reducerPath: "carouselApi",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getCarouselItems: builder.query({
            async queryFn() {
                try {
                    const ref = collection(db, 'carousel-info-img');
                    const querySnapshot = await getDocs(ref);
                    let carouselItems = [];
                    console.log('ref', ref);
                    querySnapshot?.forEach((doc) => {
                        carouselItems.push({ id: doc.id, ...doc.data() });
                    });
                    return { data: carouselItems };
                } catch (error) {
                    console.error(error.message);
                    return { error: error.message };
                }
            },
            providesTags: ['CarouselItems'],
        }),
        getCarouselItem: builder.query({
            async queryFn(id) {
                try {
                    const docRef = doc(db, 'carousel-info-img', id);
                    const snapshot = await getDoc(docRef);
                    return { data: snapshot.data() };
                } catch (error) {
                    console.error(error.message);
                    return { error: error.message };
                }
            },
            providesTags: ['CarouselItem'],
        }),
    }),
});

export const {
    useGetCarouselItemsQuery,
    useGetCarouselItemQuery
} = carouselApi;