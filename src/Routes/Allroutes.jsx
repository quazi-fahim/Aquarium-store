import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Page/Home'
import FAQ from '../Page/FAQ'
import Signup from '../Page/Signup'
import Signin from '../Page/Signin'
import Contact from '../Page/Contact'
import Navbar from '../Component/Navbar'
import Plantfish from '../Component/Plantfish'
import Descriptionpage from '../Component/Descriptionpage'


const Allroutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/" element={<Plantfish />} />
        <Route path="/product/:productId" element={<Descriptionpage />} />
        </Routes> 
    </div>
  )
}

export default Allroutes