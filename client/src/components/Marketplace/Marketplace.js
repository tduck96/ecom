import {useState, useEffect} from 'react'
import Link from 'react-router-dom';
import styles from './Marketplace.module.css';
import axios from 'axios'

const Marketplace = () => {

  const [itemList, setItemList] = useState([]);

  const getItems = async () => {
   const shopData = await axios.get('/api/get')
    .then(res => setItemList(res.data)) 
  }

  useEffect(() => {
    getItems();
  }, [])
 
  return (

    <div className ={styles.shopContainer}>
      <h1> Shop Prints:</h1>
    <div className = {styles.container}>
      
     {
      itemList.map(item => (
        <div className = {styles.card} key = {item.id}>
          <a href = {`/prints/${item.id}`}>
          <img src = {item.photo_url} alt='photoitems' className = {styles.photos}></img>
          </a>
      </div>
     )
)}
     
    </div>
    </div>
  )
}

export default Marketplace
