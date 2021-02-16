import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="footer-menu">
      <ul>
        <li>
          <Link to="/products/doners">Шаурма</Link>
        </li>
        <li>
          <Link to="/products/pizzas">Пицца</Link>
        </li>
        <li>
          <Link to="/products/hotdishes">Горячие блюда</Link>
        </li>
        <li>
          <Link to="/products/salads">Салаты</Link>
        </li>
        <li>
          <Link to="/products/drinks">Напитки</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/about">О нас</Link>
        </li>
        <li>
          <Link to="/contacts">Контакты</Link>
        </li>
        <li>
          <Link to="/delivery">Доставка</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
