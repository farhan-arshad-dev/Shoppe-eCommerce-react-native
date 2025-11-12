import axios from "axios";
import { storage } from "../storage";
import { STORAGE_KEYS } from "../storage/storage_keys";
import AxiosMockAdapter from 'axios-mock-adapter';
import { API_BASE_URL, MOCK_MODE } from "../config";

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use(async (config) => {
    const token = await storage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (token) {
        config.headers.Authorization = `JWT ${token}`;
    }
    console.log(config.headers.Authorization);
    return config;
});

if (MOCK_MODE === 'true') {
    console.log("Serving Mock Data");

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

    const mock = new AxiosMockAdapter(apiClient, { delayResponse: 400 });

    // Mock login endpoint
    mock.onPost('/login').reply((config) => {
        const { email, password } = JSON.parse(config.data);
        console.log("Mock User endpoint")
        if (email === FAKE_DATA.user.email && password === FAKE_DATA.password) {
            return [200, { token: FAKE_DATA.token, user: FAKE_DATA.user }];
        }
        return [401, { message: 'Invalid credentials' }];
    });

    // Mock user info endpoint
    mock.onGet('/user').reply((config) => {
        const token = config.headers?.Authorization?.split(' ')[1];
        console.log("Mock User endpoint")
        if (token === FAKE_DATA.token) {
            return [200, FAKE_DATA.user];
        }
        return [401, { message: 'Unauthorized' }];
    });
}
