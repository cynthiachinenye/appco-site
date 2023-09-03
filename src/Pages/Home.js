import React from 'react'
import HomeImage from '../Assets/istockphoto-1145121776-612x612.jpg'
import  {Link} from 'react-router-dom'
import '../Styles/Home.css'
import Services from './Services'
import About from './About'
import Expentise from './Expentise'

function Home() {
  return (
    <div>
      <div className='Home' style={{backgroundImage: ` url(${HomeImage})`}}>
      
      <div className="header">
          
          <h1>welcome to appco uk:</h1>
          <h6>we believe professional field marketing starts with putting our best feet forward!</h6>
        
          <Link to='about'>
          <button >read more</button>
          </Link> 
          </div>     
         
      </div>
      <Services />
      <About/>
      <Expentise/>  
      </div>
  )
}

export default Home
