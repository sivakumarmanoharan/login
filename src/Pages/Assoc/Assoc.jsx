import React, {useState} from 'react'

// import Associations from '../../Pages/Associations/associations';
import './Assoc.css'
import AssociationFarmer from '../../components/AssociationFarmer/associationfarmer';
import Navbar from '../../components/Navbar1/Navbar1';
import Banner from '../../components/Banner/Banner';

const Assoc = (props) =>{
    const [category,setCategory] = useState("All");
    return(
        <div>
            <Navbar />
            <Banner />
            <AssociationFarmer category ={category}/>
        </div>
    )
}
export default Assoc