import React from 'react'
import aboutImage from '../Assets/photo-1571868200845-4fe0659ffd61.avif'
import '../Styles/About.css'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div className='about-style' style={{backgroundImage: ` url(${aboutImage})`}}>
    
     <div className="header">
         
        <h1>welcome to appco uk:</h1>
         <h6>we believe professional field marketing starts with putting our best feet forward!</h6>
      
         </div>    
      
         <Link to='about'>
         <button >read more</button>
         </Link>  
    
    </div>
  )
}

export default About
