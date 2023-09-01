import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Assets/images-removebg-preview.png'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
    <div className='logo' style={{backgroundImage: `url(${Image})`}}> </div>
    <div className='link'>

    <Link to='/'>home</Link>
    <Link to='/'> our services</Link>
    <Link to='/'>about us</Link>
    <Link to='/'> our expertise</Link>
    <Link to='/'>testimonials</Link>
    <Link to='/'>new & blog</Link>
    <Link to='/'>contact</Link>
    
    </div>

      
    </div>
  )
}

export default Navbar
