import React from 'react'
import dunes from './dunes.png'
import styles from './Marketplace.module.css';

const Marketplace = () => {
  return (
    <div className = {styles.container}>
     <img src = {dunes} alt = '' className = {styles.img}></img>
    </div>
  )
}

export default Marketplace
