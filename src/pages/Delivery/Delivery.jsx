import React from 'react';

import TopItems from './TopItems.jsx';
import Rules from './Rules.jsx';
import PaymentInfo from './PaymentInfo.jsx';

const Delivery = () => {
  return (
    <div className="container">
      <section className="delivery">
        <h2>Доставка</h2>
        <TopItems />
        <h3>Условия оплаты</h3>
        <Rules />
        <PaymentInfo />
      </section>
    </div>
  );
};

export default Delivery;
