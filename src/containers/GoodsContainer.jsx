import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getProducts } from '../redux/actions/products.js';
import { setCategory, setCriterion, resetFilters } from '../redux/actions/filters.js';
import { addProductToCart } from '../redux/actions/cart.js';

import Goods from '../pages/Goods/Goods.jsx';
import NotFound from '../pages/Errors/NotFound.jsx';

const GoodsContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { filters, products } = useSelector((state) => state);

  const dispatchCriterion = React.useCallback((criterion) => dispatch(setCriterion(criterion)), []);

  const categoryClickHandler = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const addClickHandler = React.useCallback((product) => {
    dispatch(addProductToCart(product));
  }, []);

  React.useEffect(() => {
    dispatch(resetFilters());
  }, [match.params.name]);

  React.useEffect(() => {
    if (products.allCategories.hasOwnProperty(match.params.name)) {
      dispatch(getProducts(match.params.name, filters.category, filters.criterion));
    }
  }, [filters.criterion, filters.category, match.params.name]);

  if (!products.allCategories.hasOwnProperty(match.params.name)) {
    return <NotFound />;
  } else {
    return (
      <Goods
        categoriesList={products.allCategories[match.params.name]}
        {...filters}
        {...products}
        categoryClickHandler={categoryClickHandler}
        dispatchCriterion={dispatchCriterion}
        addClickHandler={addClickHandler}
      />
    );
  }
};

export default withRouter(GoodsContainer);
