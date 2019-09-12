import React from "react";
import classes from "./Order.css";

import Burger from "../Burger/Burger";

const Order = props => {
  const ingredients = [];

  for (let ingedientName in props.ingredients) {
    ingredients.push({
      name: ingedientName,
      amount: props.ingredients[ingedientName]
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span key={ig.name} className={classes.ingredients}>
        {ig.name} ({ig.amount})&
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <div>
        <p className={classes.orderTitle}>Ingredients:</p>
        <p>{ingredientOutput}</p>
        <p className={classes.price}>
          Price:{" "}
          <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
        </p>
      </div>
      <div>
        <Burger ingredients={props.ingredients} classy={"BurgerInOrder"} />
      </div>
    </div>
  );
};

export default Order;
