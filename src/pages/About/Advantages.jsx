import React from 'react';

import advIcon1 from '../../assets/img/About/adv1.svg';
import advIcon2 from '../../assets/img/About/adv2.svg';
import advIcon3 from '../../assets/img/About/adv3.svg';
import advIcon4 from '../../assets/img/About/adv4.svg';
import advIcon5 from '../../assets/img/About/adv5.svg';
import advIcon6 from '../../assets/img/About/adv6.svg';

const Advantages = () => {
  return (
    <div className="advantages-items-wrap">
      <div className="advantages-item">
        <div className="advantages-item-icon">
          <img src={advIcon1} alt="" />
        </div>
        <div className="advantages-item-heading"> Мы удивляем гостей вкусом </div>
        <div className="advantages-item-text">
          Авторские рецепты наших блюд и соусов получили первое место на Гастрофестивале японской
          кухни.
        </div>
      </div>
      <div className="advantages-item">
        <div className="advantages-item-icon">
          <img src={advIcon2} alt="" />
        </div>
        <div className="advantages-item-heading"> Вы экономите деньги </div>
        <div className="advantages-item-text">
          Став участником системы лояльности Доминика, вы накапливаете бонусы до 10% с каждой
          покупки, а потом оплачиваете ими заказы.
        </div>
      </div>
      <div className="advantages-item">
        <div className="advantages-item-icon">
          <img src={advIcon3} alt="" />
        </div>
        <div className="advantages-item-heading"> Вы экономите время </div>
        <div className="advantages-item-text">
          95% заказов мы доставляем в течение 60 минут. А если вы сделаете предварительный заказ, то
          мы привезем его в удобное для вас время.
        </div>
      </div>
      <div className="advantages-item">
        <div className="advantages-item-icon">
          <img src={advIcon4} alt="" />
        </div>
        <div className="advantages-item-heading"> Вы получаете еду в упаковке </div>
        <div className="advantages-item-text">
          Вы получаете еду в упаковке, которая сохраняет температуру блюда более двух часов и
          является экологически чистой.
        </div>
      </div>
      <div className="advantages-item">
        <div className="advantages-item-icon">
          <img src={advIcon5} alt="" />
        </div>
        <div className="advantages-item-heading"> Стоп усилителям вкуса! </div>
        <div className="advantages-item-text">
          Только натуральные ингредиенты от проверенных поставщиков.
        </div>
      </div>
      <div className="advantages-item">
        <div className="advantages-item-icon">
          <img src={advIcon6} alt="" />
        </div>
        <div className="advantages-item-heading"> Мы дарим подарки </div>
        <div className="advantages-item-text">
          При первом заказе на доставку через приложение вы получите маленькую шаурму на выбор в
          подарок!
        </div>
      </div>
    </div>
  );
};

export default Advantages;
