import { combineReducers } from 'redux';

import products from './products.js';
import filters from './filters.js';
import cart from './cart.js';

const rootReducer = combineReducers({
  products,
  filters,
  cart,
});

export default rootReducer;
