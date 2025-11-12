import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { loginApi, getUserInfoApi } from "@/src/api/authApi";
import { logout, setLoading, setToken, setUser } from "../redux/auth/authSlice";
import { RootState } from "../redux/store/store";
import { LoginResponse } from "../types/auth";
import { storage } from "../storage";
import { STORAGE_KEYS } from "../storage/storage_keys";
import { useEffect } from "react";

export const useAuth = () => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const { token, user, isLoading } = useSelector((state: RootState) => state.auth);

    // Load user info if token exists
    const { data, isSuccess, error, isError } = useQuery({
        queryKey: ['userInfo'],
        queryFn: () => getUserInfoApi(),
        enabled: !!token,
    });
    useEffect(() => {
        if (isSuccess) {
            console.log("Fetched User Profile: ", true);
            storage.setItem(STORAGE_KEYS.USER, data);
            dispatch(setUser(data))
        } else if (isError) {
            console.log("Fetched User Profile: ", false);
            dispatch(setUser(null))
        }
    }, [data, dispatch, error, isError, isSuccess])

    const loginMutation = useMutation({
        mutationFn: loginApi,
        onSuccess: async (data: LoginResponse) => {
            storage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.token);
            dispatch(setToken(data.token));
            dispatch(setUser(data.user));
            queryClient.invalidateQueries({ queryKey: ["userInfo"] });
        },
    });

    const restoreSession = async () => {
        console.log("Restoring User Session");
        const token = await storage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
        if (token) {
            const userProfile = await storage.getItem(STORAGE_KEYS.USER);
            dispatch(setToken(token));
            dispatch(setUser(userProfile));
        }
        dispatch(setLoading(false));
    };

    const sessionLogout = async () =>{
        console.log("Logging Out User Session");
        
        dispatch(logout());
        storage.clear();
    }

    return {
        token,
        user,
        isLoading,
        login: loginMutation.mutateAsync,
        isLoggingIn: loginMutation.isPending,
        restoreSession,
        sessionLogout,
    };
};
