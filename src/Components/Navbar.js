import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
    <div className='logo'> </div>
    <div className='link'>
    
    <Link to='/'>Home</Link>
    
    </div>

      
    </div>
  )
}

export default Navbar
