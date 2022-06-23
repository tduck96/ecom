import React from 'react'
import Cart from '../Cart/Cart.js'
import styles from './Sidecart.module.css'
const SideCart = ({cart, setCart}) => {

  function sideCartDelete(item) {

     const newCart = cart.filter(cartitem => cartitem.name !== item.name ) 
     setCart(newCart);
     console.log(cart);
  
  }

  const calculateCart =
    cart.map(cartItem => cartItem.grandTotalForItem)
   
   const accumulatedCartTotal = calculateCart.reduce((a, b) => a + b, 0)

   
  return (
    <div className = {styles.cartHolder}>

      <h2> Cart Items: </h2>
      {
        cart.map(item => (
          <div key = {item.id} className = {styles.card}>
            
            <img src = {item.photo} alt = '' className={styles.photo}></img>
            <p> {item.name}</p>
            <p> ${item.price} x ({item.quantity})</p>
            <p></p>
            <button onClick = {() => sideCartDelete(item)}>remove</button>
            </div>
            
        ))
      } 

      <h3> Subtotal: ${accumulatedCartTotal}  </h3>
   

    
    </div>
  )
}

export default SideCart
