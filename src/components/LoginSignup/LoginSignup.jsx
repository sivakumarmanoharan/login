import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../../components/assets/person.png'
import email_icon from '../../components/assets/email.png'
import password_icon from '../../components/assets/password.png'
// import axios from 'axios'
const domain= process.env.REACT_APP_DOMAIN_NAME


export const LoginSignup = () => {
  const [action,setAction] = useState("Login");
  const [emailId, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const type='user'
  const handleSubmit = (e)=>{
    const loginUser = async()=>{
      console.log(domain)
      await fetch(`http://localhost:5000/users/login`,{
        method:"POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({emailId,password,type})
      }).then(
        (res)=>{
          if(res.status===200){
            window.location.href='/agrospace-home'
          }
          else{
            window.location.href='/login'
          }
        }
      ).catch(err=>{
        alert('Authentication denied')
      window.location.href='/login'})
    }
    loginUser()
  }
  return (
    <div class="loginbody">
      <p>.</p> 
    <div className='container5'> 
          <div className="header">
              <div className="text">{action}</div>
              <div className="underline"></div>
          </div>
          <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                  <img src={user_icon} alt="" />
                  <input type="text" placeholder="Name"/>
              </div>}
               
              <div className="input">
                  <img src={email_icon} alt="" />
                  <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email Id"/>
              </div>
              <div className="input">
                  <img src={password_icon} alt="" />
                  <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
              </div>
          </div>
          {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>}
          <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={handleSubmit}>Login</div>
          </div>
    </div>
   
    </div>
  )
}



export default LoginSignup;
