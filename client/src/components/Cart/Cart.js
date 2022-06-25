import React, { useEffect, useState } from 'react'
import styles from './Cart.module.css'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import trash from './delete.png'

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

  function continueShopping () {
    navigate('/')
  }

  function handleCheckout () {

   const sendtoStripe = async() => {
    await axios.post('http://localhost:3001/create-checkout-session', {
     sum: accumulatedCartTotal
   })
    .then(response => response.data)
     .then (({url}) => window.location = url)
     .catch(error => console.log(error))
   }
   sendtoStripe();
   }
  
  return (
    <div className = {styles.container}>
    <div className = {styles.cartContain}>
      <h1> Shopping Cart:</h1>
      {
        cart.map(item => (
          <div className = {styles.itemContainer}>
          <div key = {item.id} className = {styles.card}>
            <img src = {item.photo} alt = 'cartimage' className ={styles.cartPhoto}></img>
            <div className = {styles.descriptionandButton}>
            <p><strong>{item.name}</strong></p>
            <p>${item.price}</p>
            <p> Quantity: {item.quantity}</p>
            <button className = {styles.deleteButton} onClick = {() => removeFromCart(item)}><img src = {trash} alt = '' className = {styles.icon}></img></button>
            </div>
            </div>
            </div>
            ))

        
      }
      </div>
      <div className = {styles.subCont}>
    <h1>Subtotal ${accumulatedCartTotal}</h1>
    <button onClick = {handleCheckout} className = {styles.proceed}>Proceed to Checkout</button>
    <button onClick = {continueShopping} className = {styles.return}>Continue Shopping</button>
    </div>
    
  
  </div>
  )
}

export default Cart
