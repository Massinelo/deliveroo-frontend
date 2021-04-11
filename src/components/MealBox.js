import React from 'react';
import { FaStar } from 'react-icons/fa';

const MealBox = ({ title, description, price, picture, popular }) => {
  return (
    <div className="mealBox">
      <div className="mealBoxText">
        <div className="title">{title}</div>
        <div className={picture ? 'description' : 'fullWidth'}>
          {description}
        </div>
        <div className="prices">
          <div className="price">{price} €</div>
          {popular ? (
            <div className="populaire">
              <FaStar /> Populaire
            </div>
          ) : null}
        </div>
      </div>
      <div>{picture ? <img src={picture} alt="meal" /> : null}</div>
    </div>
  );
};

export default MealBox;
