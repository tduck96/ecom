import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

import Cart from './components/Cart/Cart';
import Item from './components/Item/Item';
import Login from './components/Login/Login';
import Marketplace from './components/Marketplace/Marketplace';
import Navigation from './components/Nav/Navigation';
import Signup from './components/Signup/Signup';
import PaymentSuccess from './components/PaymentSuccess/PaymentSuccess';



function App() {

  const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem('cart')) ?? []);
  const [loggedin, setLoggedin] = useState(JSON.parse(window.localStorage.getItem('loggedin')) ?? (false));

  
  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);
  useEffect(() => {
    window.localStorage.setItem('loggedin', JSON.stringify(loggedin))
  }, [loggedin])

  
    

  return (
    <div>
        <Router>
            <Navigation/>
            <div className = 'bodycontainer'>
        <Routes>
            <Route path = '/login' element = {<Login loggedin = {loggedin} setLoggedin = {setLoggedin}/>} />
            <Route path = '/' element = {<Marketplace />} />
            <Route  path ='/prints/:id' element={<Item  cart = {cart} setCart = {setCart} loggedin ={loggedin}/>} />
            <Route path = '/cart' element = {<Cart cart = {cart} setCart={setCart}/>} />
            <Route path = '/signup' element = {<Signup />} /> 
            <Route path = '/paymentsuccess' element = {<PaymentSuccess cart = {cart}  setCart ={setCart} />} />
        
        </Routes>
        </div>
        </Router>

    </div>
  );
}

export default App;