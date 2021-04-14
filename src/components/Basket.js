import React from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const Basket = ({ products, setProducts }) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total = total + products[i].price * products[i].quantity;
  }

  const empty = products.length === 0;

  return (
    <div className="basket">
      <div className="basketCard">
        <button className={empty ? 'disabled' : 'validate'}>
          Valider mon panier
        </button>
        {empty ? (
          <div className="empty">Votre panier est vide</div>
        ) : (
          <div>
            {products.map((product, index) => {
              return (
                <div className="product" key={index}>
                  <div>
                    <AiOutlineMinusCircle
                      onClick={() => {
                        //Crée une copie du state
                        const newProducts = [...products];
                        //Modifier la copie (supprimer le produit si égale à 1 ou décrementer la quantité)
                        if (newProducts[index].quantity === 1) {
                          newProducts.splice(index, 1);
                        } else {
                          newProducts[index].quantity--;
                        }
                        //Mettre à jour le state
                        setProducts(newProducts);
                      }}
                    />
                    {product.quantity}
                    <AiOutlinePlusCircle
                      onClick={() => {
                        const newProducts = [...products];
                        newProducts[index].quantity++;
                        setProducts(newProducts);
                      }}
                    />{' '}
                    {product.title} - {product.price}
                  </div>
                </div>
              );
            })}
            {/* Permet d'arrondir le total 2 chiffres après la virgules */}
            total : {total.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
