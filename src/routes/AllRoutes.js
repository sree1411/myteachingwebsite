import React from 'react'
import HomePage from '../pages/HomePage'
import Basic from '../pages/Basic'
import Advance from '../pages/Advance'
import Intermediate from '../pages/Intermediate'

import { Route, Routes } from 'react-router'
const AllRoutes = () => {
  return (
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='basic' element={<Basic/>}/>
         <Route path='advance' element={<Advance/>}/>
         <Route path='intermediate' element={<Intermediate />}/>

      </Routes>
  )
}

export default AllRoutes