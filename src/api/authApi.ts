import { LoginPayload, LoginResponse, User } from "../types/auth";
import { wait } from "../utils/utils";

const FAKE_DATA = {
    user: {
        id: 1,
        email: "farhan@gmail.com",
        name: "Farhan Arshad",
        profilePic: "https://avatars.githubusercontent.com/u/43750646"
    },
    password: "00000000",
    token: "token",

}

export const loginApi = async (data: LoginPayload): Promise<LoginResponse> => {
    await wait(700);

    if (data.email === FAKE_DATA.user.email && data.password === FAKE_DATA.password) {
        return {
            token: FAKE_DATA.token,
            user: FAKE_DATA.user,
        };
    }

    const err: any = new Error("Invalid credentials");
    err.status = 401;
    throw err;
};

export const getUserInfoApi = async (token?: string): Promise<User> => {
    await wait(400);
    if (token === FAKE_DATA.token) {
        return { ...FAKE_DATA.user };
    }
    const err: any = new Error("Unauthorized");
    err.status = 401;
    throw err;
};

export const logout = async () => {
    await wait(200);
    return { ok: true };
};
