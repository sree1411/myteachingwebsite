import React from 'react'
import HomePage from '../pages/HomePage'
import Basic from '../pages/Basic'
import Advance from '../pages/Advance'
import Intermediate from '../pages/Intermediate'

import { Route, Routes } from 'react-router'
import ReactJsCourse from '../pages/ReactJsCourse'
import ContactUs from '../components/contact/ContactUs'
const AllRoutes = () => {
  return (
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='basic' element={<Basic/>}/>
         <Route path='advance' element={<Advance/>}/>
         <Route path='intermediate' element={<Intermediate />}/>
         <Route path='course' element={<ReactJsCourse/>}/>
         <Route path='contactus' element={<ContactUs/>}/>
      </Routes>
  )
}

export default AllRoutes