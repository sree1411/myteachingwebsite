import { NavLink } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
     <>
     
       
        <nav className="navbar navbar-expand-lg bg-primary">
           <div className="container">
              
           <NavLink to="/"  className="navbar-brand" ><h6>SS Institute</h6></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
             <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav ms-auto" >
                    <li className="nav-item">
                        <NavLink  to="/course" className="nav-link" aria-current="page" end> React Js</NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink  to="/basic" className="nav-link" aria-current="page" > Basic </NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink  to="/advance" className="nav-link" aria-current="page" > Advance </NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink  to="/intermediate" className="nav-link" aria-current="page" > Intermediate </NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink  to="/contactus" className="nav-link" aria-current="page" > Contact Us </NavLink >
                    </li>
                 </ul>
             </div>
           </div>
        </nav>
        
     
     </>
  )
}

export default Navbar