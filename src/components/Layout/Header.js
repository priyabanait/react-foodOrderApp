import React,{Fragment} from 'react';
import classes from './Header.module.css';

import HeaderCartButton from './HeaderCartButton';
export default function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
       <h1>React Meals</h1>
        <HeaderCartButton/>
        <button></button></header>
      <div className={classes['main-image']}>
        <img src='https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true' alt='The table is full '></img>
      </div>
    
    </Fragment>
  )
}
