import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

const BackButton = ({ className, outline, onClick, children }) => {
  return (
    <Link to="/">
      <button
        className={classNames('button', className, {
          'button--outline': outline,
        })}
        onClick={onClick}>
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 13L1 6.93015L6.86175 1"
            stroke="#D3D3D3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {children}
      </button>
    </Link>
  );
};

export default BackButton;
