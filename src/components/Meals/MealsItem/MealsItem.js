import React from 'react'
import classes from './MealsItem.module.css'
import MealItemForm from './MealItemForm';
export default function MealsItem(props) {
    const price=`$${props.price}`;
  return (
    <li className={classes.meal}>
        <div>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
      </div>
      <div>
      <MealItemForm id={props.id} item={props}></MealItemForm>
      </div>
     
    
    </li>
  )
}

