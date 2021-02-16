import React from 'react';

import BackButton from '../../components/Buttons/BackButton.jsx';

import emptyCartImage from '../../assets/img/Cart/empty-cart.png';

const EmptyCart = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пуста <i>😕</i>
      </h2>
      <p>
        Вероятно, вы пока ничего не выбрали.
        <br />
        Для того, чтобы заказать доставку еды, перейдите на главную страницу.
      </p>
      <img src={emptyCartImage} alt="Empty cart" />
      <BackButton className="button--back-btn" outline>
        <span>Вернуться назад</span>
      </BackButton>
    </div>
  );
};

export default EmptyCart;
