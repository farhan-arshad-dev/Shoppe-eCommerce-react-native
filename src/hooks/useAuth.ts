import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { loginApi, getUserInfoApi } from "@/src/api/authApi";
import { setToken, setUser } from "../redux/auth/authSlice";
import { RootState } from "../redux/store/store";
import { LoginResponse } from "../types/auth";

export const useAuth = () => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const { token, user, isLoading } = useSelector((state: RootState) => state.auth);

    // Load user info if token exists
    const { data, isSuccess, error, isError } = useQuery({
        queryKey: ['userInfo', token],
        queryFn: () => getUserInfoApi(token || undefined),
        enabled: !!token,
    });
    if (isSuccess) {
        console.log("Auth success", data)
        dispatch(setUser(data))
    } else if(isError) {
        console.log("Auth failure", error)
        dispatch(setUser(null))
    }

    const loginMutation = useMutation({
        mutationFn: loginApi,
        onSuccess: async (data: LoginResponse) => {

            dispatch(setToken(data.token));
            dispatch(setUser(data.user));
            queryClient.invalidateQueries({ queryKey: ["userInfo"] });
        },
    });

    return {
        token,
        user,
        isLoading,
        login: loginMutation.mutateAsync,
        isLoggingIn: loginMutation.isPending,
    };
};
