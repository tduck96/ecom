import React from 'react'
import styles from './Cart.module.css'

const Cart = ({cart, setCart}) => {

  const removeFromCart = (item) => {
    const newCart = cart.filter(cart => (cart !== item))
   setCart(newCart)
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
            <button className = {styles.deleteButton} onClick = {() => removeFromCart(item)}>Remove from Cart</button>
            </div>
            </div>
            ))

        
      }
    
  
  </div>
  )
}

export default Cart
