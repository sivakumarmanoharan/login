import React from 'react'
import './UserChoice.css'

import aboutimg from '../../assets/about1.png'



const UserChoice = () => {
  return (
    <div>

  
    <div class="about" id ="aboutlink">
    <div className="aboutl">
      <img src={aboutimg} alt="" />
    </div>
    <div className="aboutr">
        <h3>Farmer</h3>
        <h2>Sell your Produce</h2>
        <p>A trade platform to sell your products</p>
        <a href="/Pages/PlaceOrder/PlaceOrder">Explore Feature</a>
        </div>
  
</div>
<div class="about" >
        <div className="aboutl">
          <img src={aboutimg} alt="" />
        </div>
        <div className="aboutr">
            <h3>Customer</h3>
            <h2>Buy Produce directly from Small-scale Vendors</h2>
            <p> People can buy fresh produce from farmers here </p>
            <a href="/Pages/PlaceOrder/PlaceOrder" >Explore Feature</a>
            </div>

        
    </div>
   
    </div>
    
  )
}

export default UserChoice
