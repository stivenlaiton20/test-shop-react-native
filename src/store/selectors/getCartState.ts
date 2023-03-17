import { useSelector } from 'react-redux';

const selectCartState = (state) => state.cart;

const getCartState = () => {
  const cartState = useSelector(selectCartState);
  return cartState;
}

export default getCartState;