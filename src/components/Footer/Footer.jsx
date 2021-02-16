import React from 'react';

import Contacts from './Contacts.jsx';
import Navigation from './Navigation.jsx';
import AppBlock from './AppBlock.jsx';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer__block">
            <Contacts />
            <Navigation />
            <AppBlock />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
