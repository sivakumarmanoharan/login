
import React, { useState } from 'react';
import './AgricultureForm.css'
const Form = () => {
    const [formData, setFormData] = useState({
        nitrogen: '',
        moisture: '',
        pesticides: '',
        soiltype: '',
        croptype: '',
        fertilizer: '',
        phosphorus: '',
        potassium: '',
        temperature: '',
        humidity: '',
        ph: '',
        rainfall: '',
        fertilizer: ''
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
        // You can handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div class="fertilizerbody">
        <div class = 'containerfertilizer' >
            <h2 class= 'fertilizerh2'>Seller Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Temperature">Name</label>
                <input type="text" id="temperature" name="temperature" value={formData.temperature} onChange={handleChange} required />
                
                <label htmlFor="Humidity">Product</label>
                <input type="text" id="humidity" name="humidity" value={formData.humidity} onChange={handleChange} required />
                
                <label htmlFor="Moisture">Weight in Kg</label>
                <input type="text" id="moisture" name="moisture" value={formData.moisture} onChange={handleChange} required />
                
                <label htmlFor="Soil Type">Price</label>
                <input type="text" id="soiltype" name="soiltype" value={formData.soiltype} onChange={handleChange} required />
                
                {/* <button type="submit" value="Submit" />hello</button> */}
                <button class="btn" value ="submit" type="submit">Submit</button>
            </form>
            {/* <button class="btn" value ="submit" type="submit">hello</button> */}

        </div>
        </div>
    );
};

export default Form;