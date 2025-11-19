import { useQuery } from "@tanstack/react-query";
import { getProductsApi } from "../api/productApi";

export const useProductsQuery = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProductsApi,
        staleTime: 1000 * 60 * 5,
    });
};
