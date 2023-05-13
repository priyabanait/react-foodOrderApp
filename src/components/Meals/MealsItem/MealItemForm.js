import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
export default function MealItemForm() {
  return (
    <form className={classes.form}>
        <Input label="Amount" input={{
            id:'Amount',
            type:'number',
            step:'1',
            defaultValue:'1'
        }}></Input>
      <button>+Add</button>
    </form>
  )
}
