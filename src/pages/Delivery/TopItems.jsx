import React from 'react';

import deliveryIcon_1 from '../../assets/img/Delivery/delivery_1.svg';
import deliveryIcon_2 from '../../assets/img/Delivery/delivery_2.svg';
import deliveryIcon_3 from '../../assets/img/Delivery/delivery_3.svg';
import deliveryIcon_4 from '../../assets/img/Delivery/delivery_4.svg';

const TopItems = () => {
  return (
    <div className="delivery-top-icons">
      <div className="delivery-top-icons-item">
        <div className="delivery-top-icons-item-img">
          <img src={deliveryIcon_1} alt="" />
        </div>
        <div className="delivery-top-icons-item-info">Минимальная сумма доставки 19 руб.</div>
      </div>
      <div className="delivery-top-icons-item">
        <div className="delivery-top-icons-item-img">
          <img src={deliveryIcon_2} alt="" />
        </div>
        <div className="delivery-top-icons-item-info">
          Наличными курьеру, банковской картой курьеру, банковской картой онлайн
        </div>
      </div>
      <div className="delivery-top-icons-item">
        <div className="delivery-top-icons-item-img">
          <img src={deliveryIcon_3} alt="" />
        </div>
        <div className="delivery-top-icons-item-info">
          Принимаем заказы с 10.00 до 22.30. <br />с 10:00 до 01:00 только в Зеленую зону
        </div>
      </div>
      <div className="delivery-top-icons-item">
        <div className="delivery-top-icons-item-img">
          <img src={deliveryIcon_4} alt="" />
        </div>
        <div className="delivery-top-icons-item-info">
          Бесплатная доставка в Зеленую и Оранжевую зону
        </div>
      </div>
    </div>
  );
};

export default TopItems;
