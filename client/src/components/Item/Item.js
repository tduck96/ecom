import axios from 'axios'
import  {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import styles from './Item.module.css'

const Item = ({cart, setCart}) => {

  const { id } = useParams();

  const [information, setInformation] = useState([]);
 



  
  const fetchPrint = async () => {
     axios.get(`/api/get/${id}`)
    .then(res => setInformation(res.data))
   }

   useEffect(() => {
     fetchPrint();
   }, []);

   const cartHandler = ( item) => {
    
    console.log(`${item.name}clicked`)

    setCart([
      ...cart, {
        name: item.name,
        price: item.price,
        photo: item.photo_url
      }
    ])

   }


   

  return (
    <div>
    {
      information.map(item => (
        <div className = {styles.card} key = {item.id}>
          <img src = {item.photo_url} alt ='referencePhoto' className = {styles.referencePhoto}></img>
          <div className = {styles.description}>
          <p> {item.description} </p>
          <p> ${item.price} </p>
          <p> {item.inventory} left in stock</p>
          </div>
          <div className = {styles.cartBox}>
            <button onClick = {() => cartHandler(item)}>Add to Cart</button>
            <button> Add to Watchlist </button>
            </div>
        </div>
      ))
    }
   </div>
  

    )
   }

export default Item
