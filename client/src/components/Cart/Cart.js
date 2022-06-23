import React, { useEffect } from 'react'
import styles from './Cart.module.css'
import {useNavigate} from 'react-router-dom';

const Cart = ({cart, setCart}) => {

  const navigate = useNavigate();


  useEffect(() => {
  if (cart.length === 0) {
    navigate('/') }
  }, [cart.length, navigate]);

  const removeFromCart = (item) => {
    const newCart = cart.filter(cart => (cart !== item))
   setCart(newCart)
  }

  const calculateCart =
    cart.map(cartItem => cartItem.grandTotalForItem)
   
   const accumulatedCartTotal = calculateCart.reduce((a, b) => a + b, 0)
  

 const calculateTotalNumberOfItems = 
  cart.map(cartItem => cartItem.quantity);
    const totalNumberOfItems = calculateTotalNumberOfItems.reduce((a, b) => a + b, 0)
  

  function handleCheckout () {
    navigate('/checkout')
  }
  
  return (
    <div>
      {
        cart.map(item => (
          <div key = {item.id} className = {styles.card}>
            <img src = {item.photo} alt = 'cartimage' className ={styles.cartPhoto}></img>
            <div className = {styles.descriptionandButton}>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p> Quantity: {item.quantity}</p>
            <button className = {styles.deleteButton} onClick = {() => removeFromCart(item)}>Remove from Cart</button>
            </div>
            </div>
            ))

        
      }
    <h1>Subtotal ${accumulatedCartTotal}</h1>
    <button onClick = {handleCheckout}>Checkout</button>
    
  </div>
  )
}

export default Cart
