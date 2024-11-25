import React from 'react'
import { Route, Routes } from 'react-router'
import ReactJs from '../pages/courses/ReactJs'
import Basic from '../pages/courses/Basic'
import Advance from '../pages/courses/Advance'
import Intermediate from '../pages/courses/Intermediate'
import ContactUs from '../pages/courses/ContactUs'
import LandingPage from '../pages/pageList/LandingPage'
 

const Allroutes = () => {
  return (
    <main>
       
         <Routes>
          <Route  path='' element={<LandingPage/>} />
          <Route  path='react' element={<ReactJs/>} />
          <Route  path='basic' element={<Basic/>} />
          <Route  path='advance' element={<Advance/>} />
          <Route  path='intermediate' element={<Intermediate/>} />
          <Route  path='contactus' element={<ContactUs/>} />
         </Routes>



    </main>
  )
}

export default Allroutes