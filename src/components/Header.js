import React from 'react'
import Navbar from './Navbar';

const Header = () => {

   const headerStyle = {
      position: 'fixed',
      top: 0,
      width: '100%',
    };
  return (
   <header style={headerStyle}>
   <Navbar />
  </header>
  )
}

export default Header