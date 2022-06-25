import React, { useEffect } from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './PaymentSuccess.module.css'


const PaymentSuccess = ( {cart, setCart}) => {

    const navigate = useNavigate();

    function successHandler() {
        setCart([]);
        navigate('/')
    }



    const calculateCart =
    cart.map(cartItem => cartItem.grandTotalForItem)
      const accumulatedCartTotal = calculateCart.reduce((a, b) => a + b, 0)

    

  return (
    <div>
        <h1 className = {styles.center}>Thank you for your order!</h1>
        {cart.map(item => (
            <div className = {styles.card}>
                <img src = {item.photo} alt ='' className = {styles.image} ></img>
                <div className = {styles.details}>
                <p>{item.name}</p>
                <p>${item.price} x {item.quantity} item(s) = ${item.grandTotalForItem}</p>
                </div>
           
            </div>
        )) }

        <h1>Order Total: ${accumulatedCartTotal}</h1>
        <div className= {styles.alignCenter}>
        <button onClick = {successHandler} className = {styles.returnbutton}>Finish</button>
        </div>
    </div>
  )
}

export default PaymentSuccess
