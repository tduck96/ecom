import  {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Checkout.module.css'
import SideCart from './SideCart'


const Checkout = ({ cart, setCart }) => {

  const [firstName, setFirstName]  = useState('');
  const [lastName, setLastName]  = useState('');
  const [email, setEmail]  = useState('');
  const [phoneNumber, setPhoneNumber]  = useState('');
  const [address, setAddress]  = useState(''); 
  const [city, setCity]  = useState('');
  const [country, setCountry]  = useState('');
  const [state, setState]  = useState('');
  const [zipcode, setZip]  = useState('');

  const [ccnumber, setNumber] = useState('00000000000')
  const [billingZip, setBillingZip] = useState('XXXXX')
  const [ccMonth, setccMonth] = useState('RESTRICTED')
  const [year, setYear] = useState('2022')
  const [cvc, setCVC] = useState('XXX');

  const [billing, setBilling] = useState([]);
  const [ccInfo, setccInfo] = useState([]);

  const navigate = useNavigate('/sendOrder')

  const checkOutSubmit = (e) => {
    e.preventDefault();

    setBilling([{
    firstName: firstName,
    lastName : lastName, 
    email: email,
    phoneNumber: phoneNumber,
    address: address,
    city: city, 
    country: country,
    state: state,
    zipcode: zipcode

  }])

  setccInfo([{
    ccnumber: ccnumber,
    billingZip: billingZip,
    ccMonth: ccMonth,
    year: year, 
    cvc: cvc, 
  }])
  navigate('/sendorder')
  }
  return (
    
    <div className = {styles.container}>
      <div className = {styles.formgrid}>
    <h1> Billing address</h1>
    
      <form className = {styles.formSt}>
            <div className = {styles.letsMakeItStack}>
          <label>First Name </label>
            <input type = "text" onChange = {e => setFirstName(e.target.value)}></input>
            </div>
            <div className ={styles.letsMakeItStack}>
           <label>Last Name </label>
           <input type = "text" onChange = {e => setLastName(e.target.value)}></input>
           </div>
           <div className ={styles.letsMakeItStack}>
            <label>Email Address </label>
            <input type = 'email' onChange = {e => setEmail(e.target.value)}></input>
            </div>
            <div className ={styles.letsMakeItStack}>
           <label> Phone Number </label>
            <input type = 'text' onChange = {e => setPhoneNumber(e.target.value)}></input>
            </div>
            <div className ={styles.letsMakeItStack}>
            <label>Address </label>
            <input type = 'text' onChange = {e => setAddress(e.target.value)}></input>
            </div >
            <div className ={styles.letsMakeItStack}>
            <label>City/Town </label>
            <input type = 'text' onChange = {e => setCity(e.target.value)}></input>
            </div>
            <div className ={styles.letsMakeItStack}>
            <label for="Country">Country </label>
          <select id="country" name="country" onChange = {e => setCountry(e.target.value)}>
          <option value="-">Select</option>
            <option value="United States">United States</option>
            </select>
            </div>
            <div className ={styles.letsMakeItStack}>
            <label for="State">State </label>
          <select id="State" name="State" onChange = {e => setState(e.target.value)}>
          <option value="-">-</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Kentucky">Kentucky</option>
            <option value="New York">New York</option>
            <option value="Deleware">Deleware</option>
            <option value="Montana">Montana</option>
            </select>
            </div>
            <div className ={styles.letsMakeItStack}>
            <label>Zipcode </label>
            <input type = 'text' onChange = {e => setZip(e.target.value)}></input>

            <h1> Credit Card Info</h1>
            <div className = {styles.creditGrid}>
            <label> Credit Card Number</label>
            <input type = 'text'></input>

            <label> Billing Zip</label>
            <input type = 'text'></input>

            <label> Month</label>
           <input type = 'text'></input>

            <label> Year</label>
            <input type = 'text'></input>

            <label>CVC</label>
      <     input type = 'text'></input>
      </div>
            </div>

  
            
      </form>
      </div>
      <div className = {styles.sideCart}>
    <SideCart cart = {cart} setCart = {setCart} />
    <button className = {styles.checkout} onClick = {checkOutSubmit}>Proceed to Checkout</button>
    </div>
      
    </div>
  
  )
}

export default Checkout
