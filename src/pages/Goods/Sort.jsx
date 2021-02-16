import React from 'react';

import upTriangleImg from '../../assets/img/Products/up-triangle.svg';

const Sort = React.memo(({ dispatchCriterion, criterion }) => {
  const [popUpVisible, setPopUpVisible] = React.useState(false);
  const criterions = { rating: 'популярности', basePrice: 'цене', name: 'названию' };
  const handleClick = () => {
    setPopUpVisible(!popUpVisible);
  };

  const clickHandler = (criterion) => {
    setPopUpVisible(false);
    dispatchCriterion(criterion);
  };

  React.useEffect(() => {
    document.addEventListener('click', (e) => {
      if (
        !e.target.classList.contains('sort__popup') &&
        !e.target.classList.contains('criterion') &&
        !e.target.classList.contains('currentItem')
      ) {
        setPopUpVisible(false);
      }
    });
  }, []);

  return (
    <div className="sort">
      <div className="sort__label">
        <img className={popUpVisible ? 'rotated' : null} src={upTriangleImg} alt="upTriangle" />
        <b>Сортировка по:</b>
        <span className="currentItem" onClick={handleClick}>
          {criterions[criterion]}
        </span>
      </div>
      {popUpVisible ? (
        <div className="sort__popup">
          <ul>
            {Object.values(criterions).map((item, index) => (
              <li
                key={`${item}_${index}`}
                className={criterions[criterion] === item ? 'criterion active' : 'criterion'}
                onClick={() => clickHandler(Object.keys(criterions)[index])}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
});
export default Sort;
