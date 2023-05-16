import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
export default function HeaderCartButton(props) {
  return (
    <button className={classes.button} onClick={props.onCartShow}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>
        3
      </span>
    </button>
  )
}
