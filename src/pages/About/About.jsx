import React from 'react';

import Advantages from './Advantages.jsx';

const About = () => {
  return (
    <div className="container">
      <section className="about">
        <h2>О нас</h2>
        <div className="about-subheader">
          С 2009 года городские кафе Доминика с удовольствием радуют гостей вкусной, чистой, честной
          едой и замечательным кофе!
          <br />
          Мы круглосуточно доставляем широкий ассортимент блюд и напитков. <br /> В нашем меню вы
          легко найдете и сочный стейк, и горячий суп, и вкусную шаурму, и замечательную пиццу на
          тонком тесте. Также вы можете заказать ароматный кофе собственной обжарки, как с кофеином,
          так и без него.
        </div>
        <h3>Почему Доминика</h3>
        <Advantages />
      </section>
    </div>
  );
};

export default About;
