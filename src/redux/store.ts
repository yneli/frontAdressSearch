import { configureStore } from "@reduxjs/toolkit";
import { addressesReducer } from "./slices/addresses/addressesSlice";

export const store = configureStore({
    reducer: {
        addres: addressesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;