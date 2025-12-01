import { CartItem, CartState } from '@/src/types/cartTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const item = state.items.find((item) => item.product.id === action.payload.product.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.product.id !== action.payload);
        },
        increaseQty: (state, action: PayloadAction<number>) => {
            const item = state.items.find((item) => item.product.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQty: (state, action: PayloadAction<number>) => {
            const item = state.items.find((item) => item.product.id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter((item) => item.product.id !== action.payload);
                }
            }
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const selectCartTotal = (state: RootState) =>
    state.cart.items.reduce((sum, item) => {
        const cleanedStringPrice = item.product.price.replace(/[^0-9.-]+/g, '');
        const price = parseFloat(cleanedStringPrice);
        return sum + price * item.quantity
    }, 0);  // initial value of the sum

const cartReducer = cartSlice.reducer;
export const { addItem, removeItem, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartReducer;
