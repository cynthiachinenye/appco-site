import React from 'react'
import contactImage from '../Assets/unnamed.jpg'
import '../Styles/Contact.css'

function Contact() {
  return (
    <div className='contact' style={{backgroundImage: `url(${contactImage})`}}>
    <div>
    <h1>Contact Us</h1>
    <p>we'd love to hear from you</p>
    
    </div>
    <form id='name' method="POST">
    <label>Your name (required)</label>
    <input type='text'/>
    <label>Your email (required)</label>
    <input type='email' />
    <label className='label'>Subject</label>
    <input type='text' />
    <label className='text'>How can we help?</label>
    <textarea type='text'></textarea>
     <button type='submit'>Send</button>
    </form>
      
    </div>
  )
}
export default Contact