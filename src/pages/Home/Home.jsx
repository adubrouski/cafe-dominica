import React from 'react';

import MenuItem from './MenuItem.jsx';

import pizzasImg from '../../assets/img/Home/pizzas.jpg';
import hotDishesImg from '../../assets/img/Home/hot-dishes.jpg';
import saladsImg from '../../assets/img/Home/salads.jpg';
import drinksImg from '../../assets/img/Home/drinks.jpg';
import donersImg from '../../assets/img/Home/doners.jpg';

const Home = () => {
  const menuItems = [
    { name: 'Шаурма', imageUrl: donersImg, linkName: '/products/doners' },
    { name: 'Пицца', imageUrl: pizzasImg, linkName: '/products/pizzas' },
    { name: 'Горячие блюда', imageUrl: hotDishesImg, linkName: '/products/hotdishes' },
    { name: 'Салаты', imageUrl: saladsImg, linkName: '/products/salads' },
    { name: 'Напитки', imageUrl: drinksImg, linkName: '/products/drinks' },
  ];
  return (
    <div className="container">
      <section className="home">
        <h2>Меню</h2>
        <div className="menu__items">
          {menuItems.map((item) => (
            <MenuItem key={item.imageUrl} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
