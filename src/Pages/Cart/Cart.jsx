import React, {useState} from 'react'
import './Cart.css'
import Navbar from '../../components/Navbar1/Navbar1'
import Banner from '../../components/Banner/Banner'
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay'


const Cart = (props) => {
    const[category,setCategory] = useState("All");
  return (
    <div>

  
    <Navbar />
    <Banner />
    <ItemDisplay  category ={category}/>
    {/* <div class='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div class= "items-prices">
          <div class= "item-price-new">
            {props.old_price}
          </div>
        </div> */}
      
     
      {/* </div> */}
    </div>
  )
}

export default Cart
