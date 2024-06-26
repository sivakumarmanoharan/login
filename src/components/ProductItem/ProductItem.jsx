import React, { useContext } from 'react'
import './ProductItem.css'
import { assets } from '../../assets/assets/assets'
import { StoreContext } from '../../context/StoreContext'


const ProductItem = ({id,name,price,description,image}) => {

    //state variable
   //const[ itemCount,SetItemCount] = useState(0)
  const {cartItems, addToCart,removeFromCart}= useContext(StoreContext)
  return (
    <div class="product-item">
      <div class="prod-item-img-cont">
        <img class ="prod-item-img"src={image} alt="" />
         { !cartItems[id]   
         ?<img class='cartadd' onClick ={() => addToCart(id)} src={assets.add_icon_white} alt="" />
          :<div class='prod-item-counter'>
            <img onClick ={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick = {() => addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
      }  
        
      </div>
      <div class="prod-info">
        <div class="prod-name">
            <p>{name}</p>
            
        </div>
        <p class="prod-item-desc">{description}</p>
        <p class="prod-item-price">${price}</p>
      </div>
    </div>
  )
}

export default ProductItem
