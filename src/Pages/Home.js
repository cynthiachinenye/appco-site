import React from 'react'
import HomeImage from '../Assets/istockphoto-1145121776-612x612.jpg'
import  {Link} from 'react-router-dom'
import '../Styles/Home.css'
import Services from './Services'
import About from './About'

function Home() {
  return (
    <div className='Home' style={{backgroundImage: ` url(${HomeImage})`}}>
    
     <div className="header">
         
        <h1>welcome to appco uk:</h1>
         <h6>we believe professional field marketing starts with putting our best feet forward!</h6>
      
         </div>    
      
         <Link to='about'>
         <button >read more</button>
         </Link>  
        <Services/>
        <About/>
    </div>
  )
}

export default Home
