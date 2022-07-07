import {useState, useEffect} from 'react'
import styles from './Marketplace.module.css';
import axios from 'axios'

const Marketplace = () => {

  const [itemList, setItemList] = useState([]);

  const getItems = async () => {
     await axios.get('https://prettyprints.herokuapp.com/api/get')
    .then(res => setItemList(res.data)) 
  }
  useEffect(() => {
    getItems();
  }, [])
 
  return (

    <div className ={styles.shopContainer}>
      <h1> Shop Prints:</h1>
      <div className = {styles.flexit}>
    <div className = {styles.container}>
      
     {
      itemList.map(item => (
        <div className = {styles.card} key = {item.id}>
          <a href = {`/prints/${item.id}`} className = {styles.link}>
          <img src = {item.url} alt='photoitems' className = {styles.photos}></img>
          </a>
      </div>
     )
)}
     </div>
    </div>
    </div>
  )
}

export default Marketplace
