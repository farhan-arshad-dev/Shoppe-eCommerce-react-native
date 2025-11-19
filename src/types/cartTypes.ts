export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
