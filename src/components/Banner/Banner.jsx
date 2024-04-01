import React from 'react'
import './Banner.css'
import dark_arrow from '../../assets/dark-arrow.png'
import {Link} from "react-router-dom"

const Banner = () => {
  return (
    <div class="banner container3" id ="bannerlink">
        <div class="banner-text">
            <h1 class="banner-heading">Sowing Innovation, Reaping Efficiency</h1>
            <p class="banner-content"> Agrosphere  empowers small-scale farmers by providing an application with real-time solutions, 
            community connections, and access to resources, addressing challenges such as limited information on crops and fertilizers. 
            </p>
            <br />
            <Link to ="../../Pages/Store/Store">  <button class="btn3" onClick ="../../Pages/Store/Store">Explore More <img src= {dark_arrow} alt="" /></button></Link>
        </div>
      
    </div>
  )
}

export default Banner
