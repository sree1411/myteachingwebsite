import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
    <div className="text-center p-3" style={{ backgroundColor: '#f8f9fa' }}>
      © 2024 Institute Name:
      <NavLink className="text-dark" to="/"> www.ssinstitute.tech </NavLink>
    </div>
  </footer>
  )
}

export default Footer