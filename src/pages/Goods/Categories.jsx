import React from 'react';

const Categories = React.memo(({ categoriesList, categoryClickHandler, category }) => {
  console.log('rerendered');
  return (
    <div className="categories">
      <ul className="categories__menu">
        <li
          className={category === null ? 'active' : null}
          onClick={() => categoryClickHandler(null)}>
          Все
        </li>
        {categoriesList.map((item, index) => (
          <li
            className={index === category ? 'active' : null}
            onClick={() => categoryClickHandler(index)}
            key={`${item}_${index}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
