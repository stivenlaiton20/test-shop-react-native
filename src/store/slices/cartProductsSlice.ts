import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any;
};

type CartProduct = {
  product: Product;
  quantity: number;
};

type CartProductsState = {
  items: CartProduct[];
};

const initialState: CartProductsState = {
  items: [],
};

export const cartProductsSlice = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
        console.log(action.payload)
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter(
            (item) => item.product.id !== action.payload
          );
        }
      }
    },
  },
});

export const {
    addToCart ,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartProductsSlice.actions;

export const selectCartProducts = (state: RootState) => state.cartProducts.items;

export default cartProductsSlice.reducer;