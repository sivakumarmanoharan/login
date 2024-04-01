import React from 'react'
import './Services.css'
import prog1 from '../../assets/crop1.jpg'
import prog2 from '../../assets/soil.jpg'
import prog3 from '../../assets/yield.jpg'
import prog1icon from '../../assets/soil-icon1.png'
import prog2icon from '../../assets/yield-icon.png'
import prog3icon from '../../assets/fertilizer-icon.png'
import {Link} from 'react-router-dom'

const Services = () => {
  return (
   
    <div className='services-container'>
    <div class ="services" id ="serviceslink">
       
        <div className="service">
            <img  onclick ="../CropForm.jsx"src={prog1} alt="" />
            <div className="caption">
                <Link to="/components/CropForm/CropForm"><img src={prog1icon} alt="" /></Link>
                <a href="/components/CropForm/CropForm">Crop Recommender</a>
            </div>
        </div>
        <div className="service">
            <img src={prog2} alt="" />
            <div className="caption">
            <Link to="/components/Fertilizer/Fertilizer"><img src={prog3icon} alt="" /></Link>
                <a href="/components/Fertilizer/Fertilizer">Fertilizer Recommender</a>
            </div>
        </div>
        <div className="service">
            <img src={prog3} alt="" />
            <div className="caption">
            <Link to="/components/CropYeild/CropYeild"><img src={prog2icon} alt="" /></Link>
                <a href="/components/CropYeild/CropYeild">Yield Estimator</a>
            </div>
        </div>

        
       
      
    </div>
    </div>
  )
}

export default Services
