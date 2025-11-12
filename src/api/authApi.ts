import { LoginPayload, LoginResponse, User } from "../types/auth";
import { wait } from "../utils/utils";
import { apiClient } from "./client";

export const loginApi = async (data: LoginPayload): Promise<LoginResponse> => {
    const res = await apiClient.post("/login", data);
    return res.data; // assume { token: string, user: {...} }
};

export const getUserInfoApi = async (): Promise<User> => {
    const res = await apiClient.get("/user");
    return res.data; // assume { user: {id: number, name: string, email: string, profilePic: string;} }
};

export const logout = async () => {
    await wait(200);
    return { ok: true };
};
