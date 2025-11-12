import axios from "axios";
import { storage } from "../storage";
import { STORAGE_KEYS } from "../storage/storage_keys";

export const apiClient = axios.create({
    baseURL: process.env.API_BASE,
    headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use(async (config) => {
    const token = await storage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (token) {
        config.headers.Authorization = `JWT ${token}`;
    }
    return config;
});
