import React from 'react'
import {contactImage} from '../Assets/istockphoto-1198196612-612x612.jpg'
import '../Styles/Contact.css'

export default function Contact() {
  return (
    <div className='contact' style={{backgroundImage: `url(${contactImage})`}}>
    <h1>Contact Us</h1>
    <p>we'd love to hear from you</p>
    <form id='name' method="POST">
    <label>Your name (required)</label>
    <input type='text'/>
    <label>Your email (required)</label>
    <input type='email' />
    <label>Subject</label>
    <input type='text' />
    <textarea type='text'>How can we help?</textarea>
    </form>
      
    </div>
  )
}
