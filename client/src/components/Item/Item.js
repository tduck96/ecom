import axios from 'axios'
import  {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Item.module.css'

const Item = ({cart, setCart}) => {

  const { id } = useParams();

  const [information, setInformation] = useState([]);
  const [quantity, setQuantity] = useState('1');
 
  const navigate = useNavigate();
  
  const fetchPrint = async () => {
     axios.get(`/api/get/${id}`)
    .then(res => setInformation(res.data))
   }

   useEffect(() => {
     fetchPrint();
   }, []);

   function ItemTimesQuantity (itemprice, itemquantity)  {
    return (itemprice * itemquantity)
   }

   const cartHandler = (item) => {
     const checker = cart.map(cartitem => cartitem.name);
        checker.includes(item.name) ? alert('ALREADY ADDED TO CART') : addToCartIfNotADuplicate();    

      function addToCartIfNotADuplicate(){
      setCart([
          ...cart, {
          name: item.name,
          price: item.price,
          photo: item.photo_url,
          quantity: quantity,
          grandTotalForItem: ItemTimesQuantity(item.price, quantity)
        }
      ])
      navigate('/cart')
    }}

console.log(quantity)
   

   

  return (
    <div className = {styles.container}>
    {
      information.map(item => (
        <div className = {styles.card} key = {item.id}>
          <img src = {item.photo_url} alt ='referencePhoto' className = {styles.referencePhoto}></img>
          <div className = {styles.description}>
          <h1 className={styles.name}>{item.name}</h1>
          <p> Price : ${item.price} </p>
          <p> {item.inventory} left in stock</p>
          <p> <i>{item.description} </i></p>
          
          <div className = {styles.cartBox}>
            <label for ='quantity'>Select a quantity:</label>
            <select id = 'quantity' name = 'quantity' onChange = {(e) => 
              setQuantity(e.target.value)}> 
              <option value ='1'>1</option>
              <option value ='2'>2</option>
              <option value ='3'>3</option>
              <option value ='4'>4</option>
              <option value ='5'>5</option>
              </select>
            <button className = {styles.cartBut}onClick = {() => cartHandler(item)}>Add to Cart</button>
            {/* <button> Add to Watchlist </button> */}
            </div>
            </div>
        </div>
      ))
    }
   </div>
  

    )
   }

export default Item
