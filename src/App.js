
import './App.css';
import { LoginSignup } from './components/LoginSignup/LoginSignup';
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Store from './Pages/Store/Store'
import CropForm from './components/CropForm/CropForm'
import FertilizerForm from './components/Fertilizer/Fertilizer'
import YieldForm from './components/CropYeild/CropYeild';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/agrospace-home" replace />} />
        <Route path="/login" element={<><LoginSignup/></>} />
        <Route path="/agrospace-home" element={<><Home/></>} />
        <Route path="/Pages/Store/Store" element={<><Store/></>} />
        <Route path='/components/CropForm/CropForm' element={<><CropForm/></>} />
        <Route path='/components/Fertilizer/Fertilizer' element={<><FertilizerForm/></>}/>
        <Route path='/components/CropYeild/CropYeild' element={<><YieldForm/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
