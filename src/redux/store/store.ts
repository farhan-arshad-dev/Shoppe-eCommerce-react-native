import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../auth/authSlice";
import cartReducer from "../cart/cartSlice";


const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
