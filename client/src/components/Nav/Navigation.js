import React from 'react'
import styles from './Navigation.module.css';


const Navigation = () => {
  return (
   <navbar className = {styles.navContainer}>
      <brand>
        <a href='/'>Pretty Prints</a>
      </brand>
    
    <section className = {styles.rightSideContainer}> 
    <a href='/Login'>Account</a>
    <a href='/cart'>Cart</a>
    </section>

   </navbar>
  )
}

export default Navigation
