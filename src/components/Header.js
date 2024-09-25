import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
     <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="#">Basic </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="#">Advance </NavLink>
        </li> 
         <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="#">Intermediate</NavLink>
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>
     </header>
  )
}

export default Header