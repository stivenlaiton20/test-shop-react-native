import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { cartProductsSlice } from '../slices/cartProductsSlice';

export const selectCartProducts = (state: RootState): cartProducts[] => state.cartProducts.items;

export const useCartProducts = (): cartProducts[] => useSelector(selectCartProducts);