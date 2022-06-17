import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import styles from './Login.module.css';
import {v4 as uuidv4 } from 'uuid'
const axios = require('axios');




const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault()

   setUser({
    email: email,
    password: password,
    userid: uuidv4()
   })
      setEmail('')
      setPassword('')

      axios.post('http://localhost:3001/api/add', user)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  // window.location.replace('/')

  }


  return (
    <loginbox className={styles.loginbox}>
    <Form className = {styles.formContainer}>
  <Form.Group className= {styles.inputContainer} controlId="formBasicEmail">
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
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
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
