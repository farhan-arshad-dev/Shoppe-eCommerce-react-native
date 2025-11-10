import { AuthState, User } from "@/src/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: AuthState = {
    token: null,
    user: null,
    isLoading: true,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string | null>) {
            state.token = action.payload;
        },
        setUser(state, action: PayloadAction<User | null>) {
            state.user = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        logout(state) {
            state.token = null;
            state.user = null;
        },
    },
});

const authReducer = authSlice.reducer
export const { setToken, setUser, setLoading, logout } = authSlice.actions;
export default authReducer;