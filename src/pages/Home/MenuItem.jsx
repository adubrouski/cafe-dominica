import React from 'react';

import { Link } from 'react-router-dom';

const MenuItem = ({ name, imageUrl, linkName }) => {
  return (
    <div className="menu__items-wrapper">
      <Link to={linkName}>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className="item"></div>
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default MenuItem;
