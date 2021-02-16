import React from 'react';

import Button from '../../components/Buttons/Button.jsx';

const ProductCard = React.memo(
  ({ id, imageUrl, name, weights, types, prices, ingredients, addClickHandler }) => {
    const [activeType, setActiveType] = React.useState(0);
    const [activeWeight, setActiveWeight] = React.useState(0);

    const onClickHandler = () => {
      addClickHandler({
        id,
        name,
        imageUrl,
        type: types[activeType],
        weight: weights[activeWeight],
        price: prices[activeWeight],
      });
    };

    return (
      <div className="product-card">
        <div className={ingredients ? 'product-info' : null}>
          <div className="frontside">
            <img className="product-card__image" src={imageUrl} alt="Doner" />
            <h4 className="product-card__title">{name}</h4>
          </div>
          <div className="backside">
            <h5>Ингредиенты</h5>
            <p>{ingredients}</p>
          </div>
        </div>
        <div className="product-card__selector">
          <ul style={types.length === 0 ? { marginBottom: 0 } : null}>
            {types.map((item, index) => (
              <li
                key={`${item}_${index}`}
                className={index === activeType ? 'active' : null}
                onClick={() => setActiveType(index)}>
                {item}
              </li>
            ))}
          </ul>
          <ul>
            {weights.map((item, index) => (
              <li
                key={`${item}_${index}`}
                className={index === activeWeight ? 'active' : null}
                onClick={() => setActiveWeight(index)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="product-card__bottom">
          <div className="product-card__price">{prices[activeWeight]} руб</div>
          <Button className="button--add" outline onClick={onClickHandler}>
            <span className="plus">+</span>
            <span>Добавить</span>
          </Button>
        </div>
      </div>
    );
  },
);
export default ProductCard;
