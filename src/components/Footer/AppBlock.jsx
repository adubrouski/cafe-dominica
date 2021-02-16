import React from 'react';

import googlePlayIcon from '../../assets/img/Footer/google-play.png';
import appStoreIcon from '../../assets/img/Footer/app-store.png';

const AppBlock = () => {
  return (
    <div className="footer-app">
      <div className="footer-app-text">
        Скачай наше приложение <br />
        для быстрого и <br />
        удобного заказа еды
      </div>
      <div className="footer-app-buttons">
        <div className="footer-app-btn">
          <a target="_blank" rel="noreferrer" href="https://play.google.com/store">
            <img src={googlePlayIcon} alt="googlePlay" />
          </a>
        </div>
        <div className="footer-app-btn">
          <a target="_blank" rel="noreferrer" href="https://www.apple.com/ru/app-store/">
            <img src={appStoreIcon} alt="appStore" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppBlock;
