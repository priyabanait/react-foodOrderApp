import React, { useContext } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../Store/Cart_context'
export default function MealItemForm(props) {
  const cartCntx=useContext(CartContext);
  const addItem=(event)=>{
event.preventDefault();
const quantity=document.getElementById('Amount' +props.id).value;
cartCntx.addItem({...props.item,quantity:quantity})
console.log('After addItem to cart',cartCntx);
  }
  return (
    <form className={classes.form}>
      {console.log("Inside render",cartCntx.items)}
        <Input label="Amount" input={{
            id:'Amount' +props.id,
            type:'number',
            step:'1',
            defaultValue:'1'
        }}></Input>
      <button onClick={addItem}>+Add</button>
    </form>
  )
}
