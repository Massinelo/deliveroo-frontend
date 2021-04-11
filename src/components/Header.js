import React from 'react';

const Header = ({ logo, restaurant, categories }) => {
  return (
    <div className="header">
      <div className="greyBorder">
        <div className="wrapper">
          <img src={logo} alt="deliveroo-logo" className="logo" />
        </div>
      </div>
      <div className="wrapper">
        <div className="flexHeader">
          <div className="headerText">
            <h1>{restaurant.name}</h1>
            <p>{restaurant.description}</p>
          </div>

          <div className="restoImage">
            <img src={restaurant.picture} alt="resto_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
