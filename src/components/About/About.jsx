import React from 'react'
import './About.css'
import aboutimg from '../../assets/about3.jpg'

const About = () => {
  return (
    <div class="about" id ="aboutlink">
        <div className="aboutl">
          <img src={aboutimg} alt="" />
        </div>
        <div className="aboutr">
            <h3>About Us</h3>
            <h2>Growing Futures: Empowering Farmers, Enriching Harvests</h2>
            <p>In line with the United Nations' goal of doubling agricultural productivity and incomes for 
              small-scale food producers by 2030, this project focuses on increasing the profits of small-scale 
              farmers by  addressing their challenges. Small-scale farmers often face limitsed access to essential 
              information on plants, fertilizers, and making crucial decisions, impacting their profitability. </p>
              
             <p>This project addresses these challenges through an application that provides real-time solutions and fosters connections
               within the agricultural community. By empowering small-scale farmers with access to crucial information, the project aims 
               to significantly increase their profits. The result of this application is expected to increase access to vital information,
                making informed decisions, and ultimately enhance their profitability, contributing to sustainable agricultural practices and 
                economic growth in rural areas.</p> 
            {/* <p>In line with the United Nations' goal of doubling agricultural productivity and incomes for 
              small-scale <br />food producers by 2030, this project focuses on increasing the profits of small-scale 
              farmers by <br /> addressing their challenges. Small-scale farmers often face limitsed access to essential 
              information <br />on plants, fertilizers, and making crucial decisions, impacting their profitability. </p>
              
             <p>This project addresses these challenges through an application that provides real-time solutions and <br />fosters connections
               within the agricultural community. By empowering small-scale farmers with <br />access to crucial information, the project aims 
               to significantly increase their profits. The result of this <br /> application is expected to increase access to vital information,
                making informed decisions, and <br/> ultimately enhance their profitability, contributing to sustainable agricultural practices and 
                economic <br/>growth in rural areas.</p>  */}
            
            
            
            </div>

            
    </div>
    
   

  )
}

export default About
