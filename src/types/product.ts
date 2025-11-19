export interface HomeResponse {
    sliderItems?: ProductItem[];
    categories?: ProductItem[];
    topProducts?: ProductItem[];
    newItems?: ProductItem[];
    saleItems?: ProductItem[];
    popularItems?: ProductItem[];
    justForYouItems?: ProductItem[];
};

export interface ProductItem {
    id: number;
    title: string;
    images: string[];
    description: string;
    price: string;
    discountPercentage: string;
    discountedPrice: string;
    type: ItemType;
    totalLikes: number;
    tag: string,
    count: number;
};

export enum ItemType {
    PRODUCT = "product",
    BANNER = "banner",
};
