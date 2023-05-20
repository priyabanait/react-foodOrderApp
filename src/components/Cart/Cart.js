import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

import CartContext from '../../Store/Cart_context'
export default function Cart(props) {
  const cartcntx=useContext(CartContext);
  const totalAmount = `$${cartcntx.totalAmount.toFixed(2)}`;

  const items=<ul>{cartcntx.items.map((data, index)=><li key={index}>
     Name: {data.name}, Price: {data.price}, Quantity: {data.quantity} </li>)}</ul>
 
  return (
    
    <Modal className={classes.cartitems} onClose={props.onClose}>
      {items}
      
    <div className={classes.total}>
<span> Total Amount</span>
<span>{totalAmount}</span>
    </div>
    <div className={classes.actions}>
    
      <button className={classes.buttonalt} onClick={props.onClose}>Close</button>
      <button className={classes.button}>Order</button>
      
    </div>
    </Modal>
  )
}
