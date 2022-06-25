import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import {v4 as uuidv4 } from 'uuid'
const axios = require('axios');




const Login = ( {loggedin, setLoggedin }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMes, setErrorMes] = useState('')
  
  const navigate = useNavigate();

  if (loggedin === true) navigate('/')

  const submitHandler = (e) => {
    e.preventDefault()
   async function validateUser() { 
    await axios.post('http://localhost:3001/api/login', {email: email, password: password})
    .then(res => res.data[0] ? setLoggedin(true) : setErrorMes('Wrong Email/Password'), setLoggedin(false) )
    .catch(error => console.log(error.data))

}
  

   if (email === undefined || password === undefined) {
    console.log('enter proper credentials')
   } else {
    validateUser();
   }

  
   
  // window.location.replace('/')
  setEmail('')
  setPassword('')

  }


  return (
    <loginbox className={styles.loginbox}>
     
    <Form className = {styles.formContainer}>
    <Form.Group className= {styles.inputContainer} controlId="formBasicEmail">
    <p className = {styles.errMes}> {errorMes}</p>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className={styles.inputContainer} controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
  </Form.Group>
 
  <div className = {styles.buttonContainer}>
  <Button variant="primary" type="submit" className = {styles.button} onClick= {submitHandler}>
    Submit
  </Button>
  <a href = '/signup' className = {styles.signUp}>Sign up</a>
  </div>
</Form>
</loginbox>
  )
}

export default Login
