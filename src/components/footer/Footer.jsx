import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start m-3 border border-2 border-dark">
    <div className="text-center p-3" style={{ backgroundColor: '#f8f9fa' }}>
      © 2024 Institute Name:
      <NavLink className="text-dark" to="/"> www.SSInstitute.tech </NavLink>
    </div>
  </footer>
  )
}

export default Footer