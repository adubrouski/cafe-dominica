import React from 'react';

const Phones = () => {
  return (
    <div className="contact-info-block-tel">
      <div className="contact-codes">
        <div className="contact-code">
          <span className="orange">(Velcom)</span> 375(29)
        </div>
        <div className="contact-code">
          <span className="orange">(MTC)</span> 375 (33)
        </div>
        <div className="contact-code">
          <span className="orange">(life)</span> 375 (25)
        </div>
      </div>
      <div className="contact-numbers">
        <div className="contact-number-heading">Телефоны для заказов на доставку</div>
        <div className="contact-number-wrap">
          <div className="contact-number">
            <a href="tel:2313365">231-33-65</a>
          </div>
          <div className="contact-number">
            <div className="number-icons"></div>
            <a href="tel:5443">5443</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phones;
