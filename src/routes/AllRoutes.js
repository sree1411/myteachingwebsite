import React from 'react'
import { Route, Routes } from 'react-router'

const AllRoutes = () => {
  return (
      <Routes>
         <Route path='/' element={<Header/>}/>
      </Routes>
  )
}

export default AllRoutes