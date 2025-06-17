import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../store/store.ts";

interface ProductState {
    list: [],
    error: string | null | undefined
}

const initialState: ProductState = {
    list:[],
    error: null
}

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
        async () => {
            const response = await fetch('./product-data.json');
            return  await response.json();
        }
)

const productsSlice = createSlice({

    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers:
        (builder)=>{
        builder
            .addCase(getAllProducts.pending, () => {
            alert("Products are still loading...");
        }).addCase(getAllProducts.fulfilled, (state: RootState, action) => {
            state.list = action.payload;
        }).addCase(getAllProducts.rejected, (state: RootState, action) => {
            state.error = action.error.message;
            alert("Error loading:"+state.error);
        })
        }
});

export default productsSlice.reducer