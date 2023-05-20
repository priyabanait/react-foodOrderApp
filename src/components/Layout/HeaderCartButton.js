import { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../Store/Cart_context'

export default function HeaderCartButton(props) {
  const cartCntx=useContext(CartContext);
  let quantity=0;
  cartCntx.items.forEach(item=>{
    quantity=quantity+Number(item.quantity)
  })
  return (
    <button className={classes.button} onClick={props.onCartShow}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart </span>
      <span> {cartCntx.message}</span>
      <span className={classes.badge}>
       {quantity}
      </span>
    </button>
  )
}
