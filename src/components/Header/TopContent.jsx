import React from 'react';

import { Link } from 'react-router-dom';

import Button from '../Buttons/Button.jsx';

import cafeLogo from '../../assets/img/cafe-logo.png';
import cartIcon from '../../assets/img/Cart/cart-icon.svg';

const TopContent = ({ totalCount, totalPrice }) => {
  return (
    <div className="container">
      <div className="header__logo">
        <Link to="/">
          <div className="img__wrapper">
            <img src={cafeLogo} alt="Pizza logo" />
          </div>
        </Link>
        <Link to="/">
          <div className="subtitle-wrapper">
            <h1> Кафе доминика</h1>
            <p>Cамая вкусная еда во вселенной</p>
          </div>
        </Link>
      </div>
      <div className="number__wrapper">
        <div className="number-icons"></div>
        <div className="number">
          <a href="tel:5443">5443</a>
        </div>
      </div>
      <Link to="/cart">
        <div className="header__cart">
          <Button className="button--cart">
            <span>{totalPrice} руб</span>
            <div className="button__delimiter"></div>
            <img src={cartIcon} alt="cart-icon" className="cart-icon" />
            <span>{totalCount}</span>
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default TopContent;
