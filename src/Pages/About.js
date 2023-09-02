import React from 'react'
import aboutImage from '../Assets/photo-1571868200845-4fe0659ffd61.avif'
import '../Styles/About.css'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div className='about-style' style={{backgroundImage: ` url(${aboutImage})`}}>
    
     <div className="header">
         
        <h1>about us</h1>
         <h6>APPCO UK IS COMMITTED TO DELIVERING HIGH-QUALITY, RESPONSIBLE AND VALUABLE FACE-TO-FACE MARKETING CAMPAIGNS FOR OUR CLIENTS.

         </h6>
      
         </div>    
      
         <Link to='about'>
         <button >read more</button>
         </Link>  
    
    </div>
  )
}

export default About
