import React from 'react';
import { FaStar } from 'react-icons/fa';

const MealBox = ({
  title,
  description,
  price,
  picture,
  popular,
  products,
  setProducts,
}) => {
  const handleClick = () => {
    // faire une copie du state
    const newProducts = [...products];
    let found = false;

    // Verifier si l'élement à ajouter et déja present dans le tableau
    // et si oui incrémenter la quantité
    for (let i = 0; i < products.length; i++) {
      if (products[i].title === title) {
        newProducts[i].quantity++;
        found = true;
        break;
      }
    }
    if (found === false) {
      // modifier la copie
      newProducts.push({ quantity: 1, title: title, price: price });
    }
    // mettre à jour le state avec la copie
    setProducts(newProducts);
  };
  return (
    <div className="mealBox" onClick={handleClick}>
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
