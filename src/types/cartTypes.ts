import { ProductItem } from "./product";

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
