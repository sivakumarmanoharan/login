import React, { useState } from 'react';
import './Fertilizer.css'
const FertilizerForm = () => {
    const [formData, setFormData] = useState({
        "temperature": '',
        "humidity": "",
        "moisture": "",
        "soil_type": "",
        "crop": "",
        "nitrogen": "",
        "potassium": "",
        "phosphorous": "",
        "fertilizer":""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const predictFertilizer = async()=>{
            await fetch(`http://localhost:4000/predict-fertilizer`,{
              method:"POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify([formData])
            }).then(
              res=>res.json()
            ).then(
                res=>{
                    formData.fertilizer=res.prediction
                    alert( `The suggested fertilizer is ${formData.fertilizer}`)
                    window.location.reload()
                }
            ).catch(err=>{
              console.log(err)
              alert('ML model issue')
            window.location.reload()})
          }
        predictFertilizer()
        // You can handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div class= "fertilizerbody">
        <div class = 'containerfertilizer' >
            <h2 class="fertilizerh2">Fertilizer</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Temperature">Temperature</label>
                <input type="text" id="temperature" name="temperature" value={formData.temperature} onChange={handleChange} required />
                
                <label htmlFor="Humidity">Humidity:</label>
                <input type="text" id="humidity" name="humidity" value={formData.humidity} onChange={handleChange} required />
                
                <label htmlFor="Moisture">Rainfall:</label>
                <input type="text" id="moisture" name="moisture" value={formData.moisture} onChange={handleChange} required />
                
                <label htmlFor="Soil Type">Soil Type:</label>
                <input type="text" id="soil_type" name="soil_type" value={formData.soil_type} onChange={handleChange} required />
                
                <label htmlFor="Crop Type">Crop Type:</label>
                <input type="text" id="crop" name="crop" value={formData.crop} onChange={handleChange} required />

                <label htmlFor="Nitrogen">Nitrogen:</label>
                <input type="text" id="nitrogen" name="nitrogen" value={formData.nitrogen} onChange={handleChange} required />
                
                <label htmlFor="Phosphorus">Phosphorus</label>
                <input type="text" id="phosphorous" name="phosphorous" value={formData.phosphorous} onChange={handleChange} required />
                
                <label htmlFor="Potassium">Potassium</label>
                <input type="text" id="potassium" name="potassium" value={formData.potassium} onChange={handleChange} required />

                {/* <button type="submit" value="Submit" />hello</button> */}
                <button class="btn" value ="submit" type="submit">Submit</button>
            </form>
            {/* <button class="btn" value ="submit" type="submit">hello</button> */}

        </div>
        </div>
    );
};

export default FertilizerForm;