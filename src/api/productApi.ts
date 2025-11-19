import { HomeResponse, } from "../types/product";
import { apiClient } from "./client";

export const getProductsApi = async (): Promise<HomeResponse> => {
    const res = await apiClient.get("/products");
    return res.data;
};
