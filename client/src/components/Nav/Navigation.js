import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import styles from './Navigation.module.css';


const Navigation = () => {
  return (
   <navbar className = {styles.navContainer}>
      <brand>
        <a href='/'>Katie's Knicknacks</a>
      </brand>
    
    <section className = {styles.rightSideContainer}> 
    <a href='/Login'>Account</a>
    <a href='/cart'>Cart</a>
    </section>

   </navbar>
  )
}

export default Navigation
