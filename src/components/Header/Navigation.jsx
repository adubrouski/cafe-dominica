import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const navItems = [
    { name: 'Меню', linkName: '/' },
    { name: 'Доставка', linkName: '/delivery' },
    { name: 'О нас', linkName: '/about' },
    { name: 'Контакты', linkName: '/contacts' },
  ];

  return (
    <nav className="header__navigation">
      <ul>
        {navItems.map((item, index) => {
          return (
            <Link to={item.linkName} key={item.name}>
              <li
                className={index === activeItem ? 'nav__item active' : 'nav__item'}
                onClick={() => setActiveItem(index)}>
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
