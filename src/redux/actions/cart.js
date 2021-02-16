const addProductToCart = (productObj) => ({
  type: 'ADD_PRODUCT_TO_CART',
  payload: productObj,
});

const clearCart = (id) => ({
  type: 'CLEAR_CART',
  payload: id,
});

const removeDoner = (id) => ({
  type: 'REMOVE_PRODUCT',
  payload: id,
});

export { addProductToCart, clearCart, removeDoner };
