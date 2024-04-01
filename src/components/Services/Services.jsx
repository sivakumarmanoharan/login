import React from 'react'
import './Services.css'
import prog1 from '../../assets/crop1.jpg'
import prog2 from '../../assets/soil.jpg'
import prog3 from '../../assets/yield.jpg'
import prog1icon from '../../assets/program-icon-1.png'
import prog2icon from '../../assets/program-icon-2.png'
import prog3icon from '../../assets/program-icon-3.png'

const Services = () => {
  return (
   
    
    <div class ="services" id ="serviceslink">
       
        <div className="service">
            <img  onclick ="../CropForm.jsx"src={prog1} alt="" />
            <div className="caption">
                <img src={prog1icon} alt="" />
                <a href="../../components/CropForm/CropForm">Crop Recommender</a>
            </div>
        </div>
        <div className="service">
            <img src={prog2} alt="" />
            <div className="caption">
                <img src={prog2icon} alt="" />
                <a href="../../components/Fertilizer/Fertilizer">Fertilizer Recommender</a>
            </div>
        </div>
        <div className="service">
            <img src={prog3} alt="" />
            <div className="caption">
                <img src={prog3icon} alt="" />
                <a href="../../components/CropYeild/CropYeild">Yield Estimator</a>
            </div>
        </div>

        
       
      
    </div>
  )
}

export default Services
