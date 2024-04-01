import React, { useState } from 'react';
import './CropYeild.css'
const YieldForm = () => {
    const [formData, setFormData] = useState({
        area: '',
        crop: '',
        rainfall: '',
        pesticides: '',
        temperature: '',
        yield:''
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
        const predictYield = async()=>{
            await fetch(`http://localhost:4000/predict-yield`,{
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
                    formData.yield=res.prediction
                    alert( `The maximum predicted yield is ${formData.yield} hg/ha`)
                    window.location.reload()
                }
            ).catch(err=>{
              console.log(err)
              alert('ML model issue')
            window.location.reload()})
          }
        predictYield()
        // You can handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div class= "yeildbody">
        <div class = 'containeryeild' >
            <h2 class ="yeildh2">Crop Yield</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="area">Area:</label>
                <input type="text" id="area" name="area" value={formData.area} onChange={handleChange} required />
                
                <label htmlFor="crop">Crop:</label>
                <input type="text" id="crop" name="crop" value={formData.crop} onChange={handleChange} required />
                
                <label htmlFor="rainfall">Rainfall:</label>
                <input type="text" id="rainfall" name="rainfall" value={formData.rainfall} onChange={handleChange} required />
                
                <label htmlFor="pesticides">Pesticides:</label>
                <input type="text" id="pesticides" name="pesticides" value={formData.pesticides} onChange={handleChange} required />
                
                <label htmlFor="temperature">Temperature:</label>
                <input type="text" id="temperature" name="temperature" value={formData.temperature} onChange={handleChange} required />
                
                {/* <button type="submit" value="Submit" />hello</button> */}
                <button class="btn" value ="submit" type="submit">Submit</button>
            </form>
            {/* <button class="btn" value ="submit" type="submit">hello</button> */}

        </div>
        </div>
    );
};

export default YieldForm;