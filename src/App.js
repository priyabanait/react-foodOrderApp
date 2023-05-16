import Header from './components/Layout/Header';
import './App.css';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import React,{Fragment, useState} from 'react'
function App() {
  const [CartShown, setCartShown]=useState(false);

  function onCartShown(){
    setCartShown(true);
  }

  function onCloseHandler(){
    setCartShown(false);
  }
  return (
    <Fragment>
     <Header onCartShown={onCartShown}></Header>
     {CartShown && <Cart onClose={onCloseHandler}></Cart>}
     <main>
      <Meals></Meals>
     </main>
    </Fragment>
  );
}

export default App;
