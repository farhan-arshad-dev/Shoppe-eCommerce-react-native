export interface Category {
    id: number;
    name: string;
    count: number;
    images: string[];
}

export interface TopProduct {
    id: number;
    image: string;
}

export interface NewItem {
    id: number;
    title: string;
    price: string,
    image: string;
}

export interface SaleItem {
    id: number;
    discount: string;
    image: string;
}

export interface PopularItem {
    id: number;
    totalLikes: number;
    tag: string,
    image: string;
}
