import React from 'react';

import CartItem from './CartItem.jsx';
import TopLabel from './TopLabel.jsx';
import EmptyCart from './EmptyCart.jsx';
import Button from '../../components/Buttons/Button.jsx';
import BackButton from '../../components/Buttons/BackButton.jsx';

const Cart = ({ items, totalPrice, totalCount, removeItemHandler, clearCartHandler }) => {
  return (
    <div className="cart">
      {totalCount ? (
        <>
          <TopLabel clearCartHandler={clearCartHandler} />
          <div className="content__items">
            {items.map((doner, index) => (
              <CartItem
                key={`${doner.id}_${index}`}
                doner={doner}
                removeItemHandler={removeItemHandler}
              />
            ))}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Всего продуктов: <b>{totalCount} шт.</b>{' '}
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} руб</b>{' '}
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <BackButton className="button--back-btn" outline>
                <span>Вернуться на главную</span>
              </BackButton>
              <Button className="pay-btn">
                <span>Оплатить сейчас</span>
              </Button>
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
