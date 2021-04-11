import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './index.css';
import './App.css';
import logo from './assets/deliveroo-logo.png';
// components
import Header from './components/Header.js';
import Categorie from './components/Categorie.js';
import Footer from './components/Footer.js';

function App() {
  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://masserver-deliveroo.herokuapp.com/'
      );

      setRestaurant(response.data.restaurant);
      setCategories(response.data.categories);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <div className="App">
      <Header logo={logo} restaurant={restaurant} categories={categories} />
      <div className="main">
        <div className="wrapper">
          <div className="categorie">
            {categories.map((categorie, index) => {
              if (categorie.meals.length === 0) {
                return null;
              }
              return <Categorie categorie={categorie} key={index} />;
            })}
          </div>
          <div className="basket">panier</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

// Transmettre toutes les clés d'un objet en tant que props on peut utilisé le spread operator comme ceci
// <myComponent {...element}/>
