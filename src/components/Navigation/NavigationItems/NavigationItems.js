import React from 'react';
import './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className="NavigationItems">
      <NavigationItem to="/" exact>About</NavigationItem>
      <NavigationItem to="orders" exact>Reviews</NavigationItem>
    </ul>
  );
};

export default NavigationItems;