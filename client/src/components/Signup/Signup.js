import {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4 } from 'uuid'
import styles from './Signup.module.css'
const axios = require('axios');

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
    const navigate = useNavigate();

    const submitHandler = (e) => {
      e.preventDefault()
  
       

          //  newuser ? sendUser() : setErrorMessage('Something went wrong try again')
       
  async function sendUser() {
       await axios.post('http://localhost:3001/api/register', {email: email, 
      password: password})
        .then(response => response.data)
        .catch(error => console.log(error.data))
  }
  sendUser();
  setEmail('')
  setPassword('')
  navigate('/login')


        // setUser([]);
    // window.location.replace('/')
  
    }
    
    return (
      <div className={styles.loginbox}>
      <Form className = {styles.formContainer}>
      <Form.Group className= {styles.inputContainer} controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" className = {styles.input}value = {email} onChange={(e) => setEmail(e.target.value)}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className={styles.inputContainer}>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  className = {styles.input}value={password} onChange={(e) => setPassword(e.target.value)} />
    </Form.Group>
    
    <div className = {styles.buttonContainer}>
    <Button variant="primary" type="submit" className = {styles.button} onClick= {submitHandler}>
      Register
    </Button>
    </div>
  </Form>
  </div>
    )
  }



  


export default Signup
