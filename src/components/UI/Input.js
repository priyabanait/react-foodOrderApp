import React from 'react'
import classes from './Input.module.css'
export default function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor='amount' >{props.label}</label>
      <input {...props.input}></input>
    </div>
  )
}
