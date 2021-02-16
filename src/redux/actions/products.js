import fetchDoners from '../../api/api.js';

const setProducts = (payload) => ({ type: 'SET_PRODUCTS', payload });

const setLoadStatus = (payload) => ({
  type: 'SET_LOAD_STATUS',
  payload,
});

const getProducts = (type, category, criterion) => (dispatch) => {
  dispatch(setLoadStatus(false));
  fetchDoners(type, category, criterion).then((doners) => dispatch(setProducts(doners)));
};

export { getProducts, setProducts };
