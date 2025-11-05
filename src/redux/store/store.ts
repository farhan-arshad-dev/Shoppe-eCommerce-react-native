import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit';
import { UserState } from "@/src/types/UserState";

// const initialUserState: UserState = {
//     userId: null,
//     userName: null,
//     token: null,
//     loading: false,
// };

const initialUserState: UserState = {
    userId: 123,
    userName: "Farhan Arshad",
    token: "abc",
    loading: false,
};

const rootReducer = combineReducers({
    userData: () => initialUserState
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
