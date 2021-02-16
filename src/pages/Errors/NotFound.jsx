import React from 'react';

import BackButton from '../../components/Buttons/BackButton.jsx';

const NotFound = () => {
  return (
    <div className="container">
      <div className="not-found">
        <h1 className="not-found--title">404</h1>
        <h3 className="not-found--subtitle">Страница не найдена</h3>
        <BackButton className="button--back-btn" outline>
          <span>Вернуться на главную</span>
        </BackButton>
      </div>
    </div>
  );
};

export default NotFound;
