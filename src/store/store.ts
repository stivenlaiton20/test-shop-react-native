import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import cartReducer from './slices/cartSlice';
import cartProductsReducer from './slices/cartProductsSlice';

export const rootReducer = combineReducers({
  cart: cartReducer,
  cartProducts: cartProductsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;