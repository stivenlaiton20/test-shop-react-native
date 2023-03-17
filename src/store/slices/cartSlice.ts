import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [
      {
    id: '1',
    name: 'Leche',
    description: 'Descripción del producto 1',
    price: 4200,
    image: require('../../../assets/product1.jpg'),
    quantity: 0
  },
  {
    id: '2',
    name: 'jugo de naranja',
    description: 'Descripción del producto 2',
    price: 3500,
    image: require('../../../assets/jugo-naranja.jpg'),
    quantity: 0
  },
  {
    id: '3',
    name: 'Arroba de arroz',
    description: 'Descripción del producto 3',
    price: 23000,
    image: require('../../../assets/arroz.jpg'),
    quantity: 0
  },
  {
    id: '4',
    name: 'Cuveta de Huevos',
    description: 'Descripción del producto 1',
    price: 16000,
    image: require('../../../assets/huevos.jpg'),
    quantity: 0
  },
  {
    id: '5',
    name: 'Salsa de tomate',
    description: 'Descripción del producto 2',
    price: 9000,
    image: require('../../../assets/tarro-tomate.jpg'),
    quantity: 0
  },
  {
    id: '6',
    name: 'Libra sal',
    description: 'Descripción del producto 3',
    price: 2800,
    image: require('../../../assets/sal.jpg'),
    quantity: 0
  },
  ],
  
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const product = state.items.find((item) => item.id === productId);
      if (product) {
        product.quantity++;
      }
      state.totalPrice += product?.price ?? 0;

    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const product = state.items.find((item) => item.id === productId);
      if (product && product.quantity > 0) {
        product.quantity--;
        state.totalPrice -= product.price;
  
      }
    },
    clearCart: (state) => {
      state.items.forEach((item) => {
        item.quantity = 0;
      });
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;