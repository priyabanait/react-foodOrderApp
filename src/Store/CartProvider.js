import React, { useState } from 'react'
import CartContext from './Cart_context'



 function CartProvider(props) {
  
  const [items,updateItems]=useState([])
  
  const [amount,updateAmount]=useState(0)
  
    const addItemToCartHandler=(item)=>{
      updateItems([...items,item]);
      updateAmount(amount + item.price)
     
      console.log("inside cart",cartContext);
    }

    const removeItemFromCartHandler=(item)=>{

    }
    const cartContext={
        items:items,
        totalAmount:amount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler ,
        message:'Click Here'

    }
  return (
<CartContext.Provider value={cartContext}>
  {console.log('inside provider',cartContext)}
    {props.children}
</CartContext.Provider>    
  
  )
}
export default CartProvider;
