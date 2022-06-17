import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Item from './components/Item/Item';
import Login from './components/Login/Login';
import Marketplace from './components/Marketplace/Marketplace';
import Navigation from './components/Nav/Navigation';
import Signup from './components/Signup/Signup';


function App() {
  return (
    <div>
        <Router>
            <Navigation/>
            <div className = 'bodycontainer'>
        <Routes>
            <Route path = '/login' element = {<Login />} />
            <Route path = '/' element = {<Marketplace />} />
            <Route path = '/cart' element = {<Cart />} />
            <Route path = '/checkout' element = {<Checkout />} />
            <Route path = '/signup' element = {<Signup />} />
        </Routes>
        </div>
        </Router>

    </div>
  );
}

export default App;