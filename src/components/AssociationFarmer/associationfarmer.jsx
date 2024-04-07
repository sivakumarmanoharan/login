import React,{useContext} from 'react'
import './associationfarmer.css'
import { StoreContext } from '../../context/StoreContext'
import Associations from '../../Pages/Associations/associations'

const AssociationFarmer = ({category}) => {

    const {market_list} = useContext(StoreContext)

  return (
    <div class="container">
    <div class="item-display" id='item-display'>
      <h2>SuperMarkets</h2>
       <div class="item-display-list">
         {market_list.map((item,display, index)=>{
          if(category = "All" || category ===item.category)
          {
            return <Associations key={index} id={item._id} name= {item.name} description={item.description} price ={item.price} image={item.image} />

          }
            //return <ProductItem key={index} id={item._id} name= {item.name} description={item.description} price ={item.price} image={item.image} />
         
         } )}
      </div> 
    </div>
    </div>
  )
}

export default AssociationFarmer