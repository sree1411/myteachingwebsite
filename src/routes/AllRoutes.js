import React from 'react'
import HomePage from '../pages/HomePage'
import Basic from '../pages/Basic'
import Advance from '../pages/Advance'
import Intermediate from '../pages/Intermediate'

import { Route, Routes } from 'react-router'
import ReactJsCourse from '../pages/ReactJsCourse'
const AllRoutes = () => {
  return (
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='basic' element={<Basic/>}/>
         <Route path='advance' element={<Advance/>}/>
         <Route path='intermediate' element={<Intermediate />}/>
         <Route path='/course' element={<ReactJsCourse/>}/>
      </Routes>
  )
}

export default AllRoutes