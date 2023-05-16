import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
export default function Cart(props) {
  const items=<ul>{[{id:'c1', name:'Halwa', amount:5, price:20}].map((data, index)=><li key={index}>{data.name}</li>)}</ul>

  return (
    
    <Modal className={classes.cartitems} onClose={props.onClose}>
      {items}
    
    <div className={classes.total}>
<span>Total Amount</span>
<span>40</span>
    </div>
    <div className={classes.actions}>
      <button className={classes.buttonalt} onClick={props.onClose}>Close</button>
      <button className={classes.button}>Order</button>
    </div>
    </Modal>
  )
}
