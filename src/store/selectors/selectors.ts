import { createSelector } from 'reselect';

const cartProductsSelector = (state: any) => state.cartProducts.items;

export const cartTotalItemsSelector = createSelector(
  cartProductsSelector,
  (items) => items.reduce((total, item) => total + item.quantity, 0)
);