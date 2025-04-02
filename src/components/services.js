import React from 'react'
import "../App.css"
import Image1 from"../assets/patty-brito-Y-3Dt0us7e0-unsplash.jpg"
import Image2 from "../assets/roman-kraft-0EVKn3-5JSU-unsplash.jpg"
import Image3 from "../assets/national-cancer-institute-701-FJcjLAQ-unsplash.jpg"


export default function services() {
  return (
    <div id='services'>
      <h2>Our services</h2>
      <div className='services-text'>
      <h1>Discover Our Care services</h1>
    </div>
    <div className='services-img'>
        <div className='services-card'>
            <img src={Image1} alt='Image'/>
            <h3>Personalized Care</h3>
            <p>Tailored Your Needs</p>
        </div>
        <div className='services-card'>
            <img src={Image2} alt='Image'/>
            <h3>Skilled Nursing</h3>
            <p>Professional Medical Assistance</p>
        </div>
        <div className='services-card'>
            <img src={Image3} alt='Image'/>
            <h3>Therapy Services</h3>
            <p>Rehablitation and Suppport</p>
        </div>
    </div>
    </div>
  )
}
