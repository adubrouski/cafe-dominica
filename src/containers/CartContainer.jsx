import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeDoner, clearCart } from '../redux/actions/cart.js';

import Cart from '../pages/Cart/Cart.jsx';

const CartContainer = () => {
  const dispatch = useDispatch();
  const cartData = useSelector(({ cart }) => cart);

  const removeItemHandler = (item) => dispatch(removeDoner(item));
  const clearCartHandler = () => dispatch(clearCart());

  return (
    <Cart {...cartData} removeItemHandler={removeItemHandler} clearCartHandler={clearCartHandler} />
  );
};

export default CartContainer;
