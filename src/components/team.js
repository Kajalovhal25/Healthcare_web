import React from 'react'
import Image from '../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'

export default function team() {
  return (
    <div id='team'>
      <h2>Meet the team</h2>
      <div className='team-text'>
        <h1>The Heart of Our Care</h1>
        <p>professionals sho are comithed to providing the highest quality of
Care to our dients. Exch menter of our team undergoes rigorous training and brings a weath of experience to ensure the well being
and comfort of those we serve</p>
      </div>
      <div className='team-people'>
        <div className='team-person'>
            <img src={Image} alt='Image'/>
            <h6>John Doe</h6>
            <p>Care Coordinator</p>
        </div>
        <div className='team-person'>
            <img src={Image} alt='Image'/>
            <h6>John Doe</h6>
            <p>Care Coordinator</p>
        </div>
        <div className='team-person'>
            <img src={Image} alt='Image'/>
            <h6>John Doe</h6>
            <p>Care Coordinator</p>
        </div>
        <div className='team-person'>
            <img src={Image} alt='Image'/>
            <h6>John Doe</h6>
            <p>Care Coordinator</p>
        </div>
      </div>
    </div>
  )
}
