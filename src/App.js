import React from 'react';
// import './App.css'
// import CarouselSlider from './Components/carousel/carousel';
// import  {SliderData} from './Components/carousel/sliderData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
// import Login from './Components/Home/Auth/Login';
import Register from './Components/Home/Auth/Register';
import Build from './Components/Home/Build/Build';
import Women from "./Components/Home/Build/women";
import Men from "./Components/Home/Build/men";
import Childrenitem from "./Components/Home/Build/children";
import Newitem from "./Components/Home/Build/new";
import ForgotPassword from './Components/Home/Auth/forgotPassword';
import CartPage from './Components/Home/Build/cart';
import Signin from './Components/Home/Auth/Signin';
import UploadProduct from './Components/Home/Build/AdminUpload/uploadProduct';
import AdminRegister from './Components/Home/Auth/adminRegister';
import CheckoutPage from './Components/Home/Build/checkpoutPage';
import TestNew from './Components/Home/Build/TestNew';
// import CartTest from './Components/Home/Build/cartTest';

const App = () =>{
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/home' element={<Build/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/' element={<Register/>}/> 
        <Route path='/women' element={<Women/>}/> 
        <Route path='/men' element={<Men/>}/> 
        <Route path='/child' element={<Childrenitem/>}/> 
        <Route path='/new' element={<Newitem/>}/> 
        <Route path='/testnew' element={<TestNew/>}/> 
        {/* <Route path='/cart' element={<CartTest/>}/>  */}
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/uploadproduct' element={<UploadProduct/>}/>
        <Route path='/adminregister' element={<AdminRegister/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
    
      
  )
}
export default App;

      // <div>
      //   <CarouselSlider slides={SliderData}/>
      // </div>

