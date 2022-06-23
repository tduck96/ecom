import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Item from './components/Item/Item';
import Login from './components/Login/Login';
import Marketplace from './components/Marketplace/Marketplace';
import Navigation from './components/Nav/Navigation';
import Signup from './components/Signup/Signup';
import SendOrder from './components/SendOrder/SendOrder';


function App() {

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  const [loggedin, setLoggedin] = useState(false)
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);
 

  
  
  
  return (
    <div>
        <Router>
            <Navigation/>
            <div className = 'bodycontainer'>
        <Routes>
            <Route path = '/login' element = {<Login loggedin = {loggedin} setLoggedin = {setLoggedin}/>} />
            <Route path = '/' element = {<Marketplace />} />
            <Route  path ='/prints/:id' element={<Item  cart = {cart} setCart = {setCart}/>} />
            <Route path = '/cart' element = {<Cart cart = {cart} setCart={setCart} />} />
            <Route path = '/checkout' element = {<Checkout cart = {cart} setCart = {setCart} />} />
            <Route path = '/signup' element = {<Signup />} />
            <Route path = '/sendOrder' element = {<SendOrder />} />
        </Routes>
        </div>
        </Router>

    </div>
  );
}

export default App;