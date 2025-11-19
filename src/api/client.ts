import axios from "axios";
import { storage } from "../storage";
import { STORAGE_KEYS } from "../storage/storage_keys";
import AxiosMockAdapter from 'axios-mock-adapter';
import { API_BASE_URL, MOCK_MODE } from "../config";
import { MOCK_AUTH_DATA, MOCK_PRODUCTS_DATA } from "../data/defaults";

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: { "Content-Type": "application/json" },
    timeout: 15000,
});

apiClient.interceptors.request.use(async (config) => {
    const token = await storage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (token) {
        config.headers.Authorization = `JWT ${token}`;
    }
    return config;
});

if (MOCK_MODE === 'true') {
    console.log("Serving Mock Data");

    const mock = new AxiosMockAdapter(apiClient, { delayResponse: 400 });

    // Mock login endpoint
    mock.onPost('/login').reply((config) => {
        const { email, password } = JSON.parse(config.data);
        console.log("Mock User endpoint")
        if (email === MOCK_AUTH_DATA.user.email && password === MOCK_AUTH_DATA.password) {
            return [200, { token: MOCK_AUTH_DATA.token, user: MOCK_AUTH_DATA.user }];
        }
        return [401, { message: 'Invalid credentials' }];
    });

    // Mock user info endpoint
    mock.onGet('/user').reply((config) => {
        const token = config.headers?.Authorization?.split(' ')[1];
        console.log("Mock User endpoint")
        if (token === MOCK_AUTH_DATA.token) {
            return [200, MOCK_AUTH_DATA.user];
        }
        return [401, { message: 'Unauthorized' }];
    });

    // Mock products endpoint
    mock.onGet('/products').reply((config) => {
        const token = config.headers?.Authorization?.split(' ')[1];
        console.log("Mock Products endpoint")
        if (token === MOCK_AUTH_DATA.token) {
            return [200, MOCK_PRODUCTS_DATA];
        }
        return [401, { message: 'Unauthorized' }];
    });
}
