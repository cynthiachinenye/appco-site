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
    <Link to='services'> our services</Link>
    <Link to='about'>about us</Link>
    <Link to='expentise'> our expertise</Link>
    <Link to='test'>testimonials</Link>
    <Link to='blog'>new & blog</Link>
    <Link to='contact'>contact</Link>
    
    </div>

      
    </div>
  )
}

export default Navbar
