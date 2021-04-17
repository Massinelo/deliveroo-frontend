import React from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const Basket = ({ products, setProducts }) => {
  let sousTotal = 0;
  for (let i = 0; i < products.length; i++) {
    sousTotal = sousTotal + products[i].price * products[i].quantity;
  }

  let delivery = 2.5;

  let total = sousTotal + delivery;

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
          <div className="products">
            {products.map((product, index) => {
              return (
                <div key={index}>
                  <div className="product">
                    <span className="quantityBox">
                      <AiOutlineMinusCircle
                        className="buttons"
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
                      <span className="quantity">{product.quantity}</span>
                      <AiOutlinePlusCircle
                        className="buttons"
                        onClick={() => {
                          const newProducts = [...products];
                          newProducts[index].quantity++;
                          setProducts(newProducts);
                        }}
                      />
                    </span>
                    <span className="productTitle">{product.title}</span>
                    <span>{product.price} €</span>
                  </div>
                </div>
              );
            })}
            {/* Permet d'arrondir le total 2 chiffres après la virgules */}
          </div>
        )}
        {empty ? null : (
          <div>
            {' '}
            <div className="sousTotal">
              <div>
                {' '}
                <span>Sous-total :</span> <span>{sousTotal.toFixed(2)} € </span>
              </div>
              <div>
                <span>Frais de livraison :</span> <span>{delivery} €</span>{' '}
              </div>
            </div>
            <div className="total">
              <span>Total :</span> <span>{total.toFixed(2)} €</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
