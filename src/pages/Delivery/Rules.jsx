import React from 'react';

import paymentIcon_1 from '../../assets/img/Delivery/payment_1.svg';
import paymentIcon_2 from '../../assets/img/Delivery/payment_2.svg';
import paymentIcon_3 from '../../assets/img/Delivery/payment_3.svg';

const Rules = () => {
  return (
    <div className="payment-rules">
      <div className="payment-rule">
        <div className="payment-rule-img">
          <img src={paymentIcon_1} alt="" />
        </div>
        <div className="payment-rule-heading"> Наличными курьеру </div>
        <div className="payment-rule-text">
          Оплата за заказ производится в белорусских рублях путем передачи наличных денежных средств
          курьеру.
        </div>
      </div>
      <div className="payment-rule">
        <div className="payment-rule-img">
          <img src={paymentIcon_2} alt="" />
        </div>
        <div className="payment-rule-heading"> Банковской картой курьеру </div>
        <div className="payment-rule-text">
          Оплата за заказ производится в белорусских рублях посредством банковской пластиковой
          карты. <br />
          <br />
          При расчете пластиковой картой, пожалуйста, заранее предупреждайте оператора, либо
          оставляйте комментарии при оформлении заказа.
        </div>
      </div>
      <div className="payment-rule">
        <div className="payment-rule-img">
          <img src={paymentIcon_3} alt="" />
        </div>
        <div className="payment-rule-heading"> Банковской картой онлайн </div>
        <div className="payment-rule-text">
          Платежи по банковским картам осуществляются через систему электронных платежей{' '}
          <a href="https://bepaid.by/" rel="noreferrer" target="_blank">
            bePaid
          </a>
          . <br />
          <br />
          Платежная страница системы{' '}
          <a href="https://bepaid.by/" rel="noreferrer" target="_blank">
            bePaid{' '}
          </a>
          отвечает всем требованиям безопасности передачи данных (PCI DSS Level 1){' '}
        </div>
      </div>
    </div>
  );
};

export default Rules;
