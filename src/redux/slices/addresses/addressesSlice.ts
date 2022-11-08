import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AdressState } from "./types";

export const fetchAdress = createAsyncThunk<any, string>("adresses/fetchAdresses", async ( text ) => {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "010735c239998f68e16d2b2b47b4df82faa31444";
    let { data } = await axios.request({
        url: url,
        method: "post",
        data: {
            query: text,
        },
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token,
        },
    });
    return data;
});

const initialState: AdressState = {
    items: null,
    status: "loading",
};

const addressesSlice = createSlice({
    name: "addres",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdress.pending, (state) => {  
                state.items = null;
            })
            .addCase(fetchAdress.fulfilled, (state, action) => {
                state.items = action.payload.suggestions; 
                
            })
            .addCase(fetchAdress.rejected, (state) => {
                state.items = null;
                
            });
            
    },
});
export const addressesReducer = addressesSlice.reducer;
export const selectIsItems = (state: any) => Boolean(state.items);