import React from 'react';
import MealBox from './MealBox';

const Categorie = (props) => {
  return (
    <div className="meal">
      <h1 className="categorieName">{props.categorie.name}</h1>
      <div className="mealSection">
        {props.categorie.meals.map((meal, index) => {
          // Transmettre toutes les clés d'un objet en tant que props,
          //  on peut utilisé le spread operator comme ci-dessous :
          return (
            <MealBox
              {...meal}
              key={index}
              products={props.products}
              setProducts={props.setProducts}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categorie;
