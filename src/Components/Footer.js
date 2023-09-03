import React from 'react'
import shortImage from '../Assets/images (1).png'
import secondImage from '../Assets/appco-uk-iof-.png'
import '../Styles/Footer.css'
function Footer() {
  return (
    <div className="footer">
    <p>privacy policy</p>
    <div className='image' style={{backgroundImage: `url(${shortImage})`}}></div>
    <div className='image' style={{backgroundImage: `url(${secondImage})`}}></div>  
    </div>
  )
}

export default Footer
