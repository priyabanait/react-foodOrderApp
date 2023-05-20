import Header from './components/Layout/Header';
import './App.css';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import React,{useState} from 'react';
import CartProvider from './Store/CartProvider';
function App() {
  const [CartShown, setCartShown]=useState(false);

  function onCartShown(){
    setCartShown(true);
  }

  function onCloseHandler(){
    setCartShown(false);
  }
  return (
    <CartProvider>
     <Header onCartShown={onCartShown}></Header>
     {CartShown && <Cart onClose={onCloseHandler}></Cart>}
     <main>
      <Meals></Meals>
     </main>
    </CartProvider>
  );
}

export default App;
