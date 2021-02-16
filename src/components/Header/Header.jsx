import React from 'react';
import { useSelector } from 'react-redux';

import Navigation from './Navigation.jsx';
import TopContent from './TopContent.jsx';

const Header = () => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
  return (
    <div className="container">
      <header className="header">
        <TopContent totalPrice={totalPrice} totalCount={totalCount} />
      </header>
      <Navigation />
    </div>
  );
};

export default Header;
