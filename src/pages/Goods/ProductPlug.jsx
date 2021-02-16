import React from 'react';

import ContentLoader from 'react-content-loader';

const ProductPlug = () => {
  return (
    <ContentLoader
      className="doner-block"
      speed={2}
      width={280}
      height={395}
      viewBox="0 0 280 395"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="61" y="103" rx="0" ry="0" width="1" height="1" />
      <rect x="55" y="171" rx="0" ry="0" width="0" height="1" />
      <rect x="52" y="96" rx="0" ry="0" width="2" height="2" />
      <rect x="61" y="293" rx="0" ry="0" width="11" height="3" />
      <rect x="52" y="0" rx="7" ry="7" width="175" height="162" />
      <rect x="0" y="180" rx="4" ry="4" width="280" height="24" />
      <rect x="0" y="345" rx="4" ry="4" width="81" height="46" />
      <rect x="160" y="345" rx="0" ry="0" width="116" height="46" />
      <rect x="0" y="233" rx="5" ry="5" width="280" height="83" />
    </ContentLoader>
  );
};

export default ProductPlug;
