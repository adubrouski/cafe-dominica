import React from 'react';

import ProductPlug from './ProductPlug.jsx';
import ProductCard from './ProductCard.jsx';
import Categories from './Categories.jsx';
import Sort from './Sort.jsx';

const Goods = React.memo(
  ({
    category,
    criterion,
    categoriesList,
    isLoaded,
    products,
    categoryClickHandler,
    dispatchCriterion,
    addClickHandler,
  }) => {
    return (
      <div className="content">
        <div className="options">
          <Categories
            categoriesList={categoriesList}
            categoryClickHandler={categoryClickHandler}
            category={category}
          />
          <Sort dispatchCriterion={dispatchCriterion} criterion={criterion} />
        </div>
        <h2 className="content__title">{categoriesList[category] || 'Вся продукция'}</h2>
        <div className="content__items">
          {isLoaded
            ? products.map((obj) => (
                <ProductCard key={obj.id} {...obj} addClickHandler={addClickHandler} />
              ))
            : Array(10)
                .fill(0)
                .map((_, index) => <ProductPlug key={`${_}_${index}`} />)}
        </div>
      </div>
    );
  },
);

export default Goods;
