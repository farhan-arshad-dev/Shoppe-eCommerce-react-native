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
    discountedPrice?: string;
    image: string;
    type: ItemType;
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

export enum ItemType {
    BANNER = "banner",
    SALE_ITEM = "sale-item"
}
