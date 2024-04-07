import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/aglogo.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
   const [menu,SetMenu] = useState("Home");
   
   const [sticky, SetSticky] = useState(false);

   useEffect(() => {
    window.addEventListener('scroll',() =>{
      window.scrollY > 50 ? SetSticky(true) : SetSticky (false)
    })
   },[])
  
    
   return (
    <nav class = {`container2 ${sticky ? 'dark-nav' :''}`}>
    <img src= { logo }alt="" class="logo" />
    <ul>
        <a  href="#bannerlink" onClick = {() => SetMenu("Home")} class={menu==="Home"?"active" :""}>Home</a>
        <a  href ="#titlelink" onClick = {() => SetMenu("Services")} class={menu==="Services"?"active" :""}>Services</a>
        <a  href ="#aboutlink" onClick = {() => SetMenu("About")} class={menu==="About"?"active" :""}>About</a>
        <a  href="/Pages/Assoc/Assoc" onClick = {() => SetMenu("Associations")} class={menu==="Associations"?"active" :""}>Associations</a>
        <a  href="../../Pages/Store/Store"onClick = {() => SetMenu("User")} class={menu==="User"?"active" :""}>User</a>
        <a  href="../../Pages/Cart/Cart"onClick = {() => SetMenu("Products")} class={menu==="Products"?"active" :""}>Products</a>
        <a href="../../Pages/Bag/Bag"onClick = {() => SetMenu("Cart")} class={menu==="Cart"?"active" :""}>Carts</a>

        <Link to ="/components/LoginSignup/LoginSignup">   <button class='btn2'>Register</button></Link>  
    </ul>
</nav>
   )
 }
 

export default Navbar
