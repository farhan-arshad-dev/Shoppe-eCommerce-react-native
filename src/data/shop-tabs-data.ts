import { Category, ItemType, NewItem, PopularItem, SaleItem, TopProduct } from "../types/shop-tabs";
import { Slide } from "../types/slide";

export const slides: Slide[] = [
    {
        id: 1,
        image: "https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321996.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaT6HhVY4g-y9Yo5WiA4kqqep7LDBV2LAxOQ&s",
    },
    {
        id: 3,
        image: "https://static.vecteezy.com/system/resources/thumbnails/048/909/710/small/amazed-young-woman-shopaholic-holding-colorful-shopping-bags-and-look-amused-at-next-shop-buying-things-in-store-standing-over-blue-background-photo.jpg",
    },
    {
        id: 4,
        image: "https://smartinvestor.com.my/wp-content/uploads/2025/05/635154-PN_1030x515_.jpg.jpeg",
    },
];

export const categories: Category[] = [
    {
        id: 1,
        name: "Clothing",
        count: 109,
        images: [
            "https://picsum.photos/seed/1/200",
            "https://picsum.photos/seed/2/200",
            "https://picsum.photos/seed/3/200",
            "https://picsum.photos/seed/4/200",
        ],
    },
    {
        id: 2,
        name: "Shoes",
        count: 530,
        images: [
            "https://picsum.photos/seed/5/200",
            "https://picsum.photos/seed/6/200",
            "https://picsum.photos/seed/7/200",
            "https://picsum.photos/seed/8/200",
        ],
    },
    {
        id: 3,
        name: "Bags",
        count: 87,
        images: [
            "https://picsum.photos/seed/9/200",
            "https://picsum.photos/seed/10/200",
            "https://picsum.photos/seed/11/200",
            "https://picsum.photos/seed/12/200",
        ],
    },
    {
        id: 4,
        name: "Lingerie",
        count: 218,
        images: [
            "https://picsum.photos/seed/12/200",
            "https://picsum.photos/seed/14/200",
            "https://picsum.photos/seed/15/200",
            "https://picsum.photos/seed/16/200",
        ],
    },
    {
        id: 5,
        name: "Watch",
        count: 218,
        images: [
            "https://picsum.photos/seed/17/200",
            "https://picsum.photos/seed/18/200",
            "https://picsum.photos/seed/19/200",
            "https://picsum.photos/seed/20/200",
        ],
    },
    {
        id: 6,
        name: "Hoodies",
        count: 218,
        images: [
            "https://picsum.photos/seed/21/200",
            "https://picsum.photos/seed/22/200",
            "https://picsum.photos/seed/23/200",
            "https://picsum.photos/seed/24/200",
        ],
    },
];

export const topProducts: TopProduct[] = [
    { id: 1, image: "https://picsum.photos/seed/1/200" },
    { id: 2, image: "https://picsum.photos/seed/2/200" },
    { id: 3, image: "https://picsum.photos/seed/3/200" },
    { id: 4, image: "https://picsum.photos/seed/4/200" },
    { id: 5, image: "https://picsum.photos/seed/5/200" },
]

export const newItems: NewItem[] = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$17,00",
        image: "https://picsum.photos/seed/1/200",
        type: ItemType.SALE_ITEM,
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$32,00",
        image: "https://picsum.photos/seed/2/200",
        type: ItemType.SALE_ITEM,
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$21,00",
        image: "https://picsum.photos/seed/3/200",
        type: ItemType.SALE_ITEM,
    },
    {
        id: 4, title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$17,00",
        image: "https://picsum.photos/seed/4/200",
        type: ItemType.SALE_ITEM,
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$32,00",
        image: "https://picsum.photos/seed/5/200",
        type: ItemType.SALE_ITEM,
    },
]

export const saleItems: SaleItem[] = [
    {
        id: 1,
        discount: "-20%",
        image: "https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321996.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
        id: 2,
        discount: "-20%",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaT6HhVY4g-y9Yo5WiA4kqqep7LDBV2LAxOQ&s",
    },
    {
        id: 3,
        discount: "-20%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/048/909/710/small/amazed-young-woman-shopaholic-holding-colorful-shopping-bags-and-look-amused-at-next-shop-buying-things-in-store-standing-over-blue-background-photo.jpg",
    },
    {
        id: 4,
        discount: "-20%",
        image: "https://smartinvestor.com.my/wp-content/uploads/2025/05/635154-PN_1030x515_.jpg.jpeg",
    },
    {
        id: 5,
        discount: "-20%",
        image: "https://smartinvestor.com.my/wp-content/uploads/2025/05/635154-PN_1030x515_.jpg.jpeg",
    },
    {
        id: 6,
        discount: "-20%",
        image: "https://smartinvestor.com.my/wp-content/uploads/2025/05/635154-PN_1030x515_.jpg.jpeg",
    },
];

export const popularItems: PopularItem[] = [
    {
        id: 1,
        totalLikes: 1780,
        tag: "New",
        image: "https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321996.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
        id: 2,
        totalLikes: 1780,
        tag: "Sale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaT6HhVY4g-y9Yo5WiA4kqqep7LDBV2LAxOQ&s",
    },
    {
        id: 3,
        totalLikes: 1780,
        tag: "Hot",
        image: "https://static.vecteezy.com/system/resources/thumbnails/048/909/710/small/amazed-young-woman-shopaholic-holding-colorful-shopping-bags-and-look-amused-at-next-shop-buying-things-in-store-standing-over-blue-background-photo.jpg",
    },
    {
        id: 4,
        totalLikes: 1780,
        tag: "Hot",
        image: "https://smartinvestor.com.my/wp-content/uploads/2025/05/635154-PN_1030x515_.jpg.jpeg",
    },
    {
        id: 5,
        totalLikes: 1780,
        tag: "New",
        image: "https://smartinvestor.com.my/wp-content/uploads/2025/05/635154-PN_1030x515_.jpg.jpeg",
    },
    {
        id: 6,
        totalLikes: 1780,
        tag: "Sale",
        image: "https://smartinvestor.com.my/wp-content/uploads/2025/05/635154-PN_1030x515_.jpg.jpeg",
    },
];

export const justForYouItems: NewItem[] = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$17,00",
        type: ItemType.SALE_ITEM,
        image: "https://picsum.photos/seed/1/200"
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$32,00",
        type: ItemType.SALE_ITEM,
        image: "https://picsum.photos/seed/2/200"
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$21,00",
        type: ItemType.SALE_ITEM,
        image: "https://picsum.photos/seed/3/200"
    },
    {
        id: 4, title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$17,00",
        type: ItemType.SALE_ITEM,
        image: "https://picsum.photos/seed/4/200"
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$32,00",
        type: ItemType.SALE_ITEM,
        image: "https://picsum.photos/seed/5/200"
    },
]

export const discountedItems: NewItem[] = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$17,00",
        discountedPrice: "$15,00",
        type: ItemType.SALE_ITEM,
        image: "https://picsum.photos/seed/1/200"
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$32,00",
        discountedPrice: "$15,00",
        type: ItemType.SALE_ITEM,
        image: "https://picsum.photos/seed/2/200"
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$21,00",
        discountedPrice: "$15,00",
        type: ItemType.SALE_ITEM,
        image: "https://picsum.photos/seed/3/200"
    },
    {
        id: 4, title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$17,00",
        discountedPrice: "$15,00",
        type: ItemType.SALE_ITEM,
        image: "https://picsum.photos/seed/4/200"
    },
    {
        id: 5, title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$17,00",
        discountedPrice: "$15,00",
        image: "https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321996.jpg?semt=ais_hybrid&w=740&q=80",
        type: ItemType.BANNER,
    },
    {
        id: 6,
        title: "Lorem ipsum dolor sit amet consectetur.",
        price: "$32,00",
        discountedPrice: "$15,00",
        type: ItemType.SALE_ITEM,
        image: "https://picsum.photos/seed/5/200"
    },
]

export const stroies: TopProduct[] = [
    { id: 1, image: "https://picsum.photos/seed/1/200" },
    { id: 2, image: "https://picsum.photos/seed/2/200" },
    { id: 3, image: "https://picsum.photos/seed/3/200" },
    { id: 4, image: "https://picsum.photos/seed/4/200" },
    { id: 5, image: "https://picsum.photos/seed/5/200" },
]

export const videoUrls = [
    "https://videos.pexels.com/video-files/2104648/2104648-hd_1280_720_30fps.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
]
