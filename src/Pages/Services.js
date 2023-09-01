import React from 'react'
import AddCommentIcon from '@mui/icons-material/AddComment';
import HandshakeIcon from '@mui/icons-material/Handshake';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import '../Styles/Services.css'

function Services() {
  return (
    <div className="service">
    <h1> our service</h1>
    <div className="flex-content">
      <div>
        <div className="icons"><AddCommentIcon/></div>
        <h2> Professional field marketing</h2>
        <hr/>
        <p>
        We are experts at setting up, managing and analysing field marketing and acquisition campaigns. Our focus is always on delivering well-informed, happy and committed customers and donors who support our clients’ business and causes over the long term. We’re incredibly proud to have been one of the UK’s preferred field marketing agencies since 1989.
        </p>
        <p>Read more</p>
      </div>
      
      <div>
        <div className='icons'><HandshakeIcon /></div>
        <h2> Customer acquisition campaigns</h2>
        <hr/>
        <p>
        We are experts at setting up, managing and analysing field marketing and acquisition campaigns. Our focus is always on delivering well-informed, happy and committed customers and donors who support our clients’ business and causes over the long term. We’re incredibly proud to have been one of the UK’s preferred field marketing agencies since 1989.
        </p>
        <p>Read more</p>
      </div>

      <div>
      <div className='icons'><FavoriteBorderIcon/></div>
      <h2>Fundraising & donor acquisition</h2>
      <hr/>
      <p>
      We are experts at setting up, managing and analysing field marketing and acquisition campaigns. Our focus is always on delivering well-informed, happy and committed customers and donors who support our clients’ business and causes over the long term. We’re incredibly proud to have been one of the UK’s preferred field marketing agencies since 1989.
      </p>
      <p>Read more</p>
    </div>
    </div>

      
    </div>
  )
}

export default Services
