
import './App.css';
import { LoginSignup } from './components/LoginSignup/LoginSignup';
import React from "react"
import { Routes, Route,Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Store from './Pages/Store/Store'
import CropForm from './components/CropForm/CropForm'
import FertilizerForm from './components/Fertilizer/Fertilizer'
import YieldForm from './components/CropYeild/CropYeild';
import Cart from './Pages/Cart/Cart'
import Bag from '../src/components/Cart/Bag'
import AgricultureForm from '../src/components/AgricultureForm/AgricultureForm'
import Assoc from './Pages/Assoc/Assoc';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/agrospace-home" replace />} />
        <Route path="/components/LoginSignup/LoginSignup" element={<><LoginSignup/></>} />
        <Route path="/agrospace-home" element={<><Home/></>} />
        <Route path="/Pages/Store/Store" element={<><Store/></>} />
        <Route path='/components/CropForm/CropForm' element={<><CropForm/></>} />
        <Route path='/components/Fertilizer/Fertilizer' element={<><FertilizerForm/></>}/>
        <Route path='/components/CropYeild/CropYeild' element={<><YieldForm/></>}/>
        <Route path='/Pages/Cart/Cart' element={<><Cart/></>}></Route>
        <Route path='/Pages/Bag/Bag' element={<><Bag/></>}></Route>
        <Route path='/Pages/PlaceOrder/PlaceOrder' element={<><AgricultureForm/></>}></Route>
        <Route path='/Pages/Assoc/Assoc' element={<><Assoc /></>} ></Route>

      </Routes>
    
  );
}

export default App;
