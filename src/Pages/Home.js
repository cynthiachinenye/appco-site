import React from 'react'
import HomeImage from '../Assets/istockphoto-1145121776-612x612.jpg'
import  {Link} from 'react-router-dom'
import '../Styles/Home.css'

function Home() {
  return (
    <div className='Home' style={{backgroundImage: ` url(${HomeImage})`}}>
    
     <div className="header">
         <h1>welcome to appco uk</h1>
         <p>we believe professional field marketing starts with putting our best feet forward!</p>
      </div>    
      <Link to='about'>
      <button >read more</button>
      </Link>  
        
    </div>
  )
}

export default Home
