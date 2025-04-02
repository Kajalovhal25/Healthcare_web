import React from 'react'
import "../App.css"
import Image1 from"../assets/patty-brito-Y-3Dt0us7e0-unsplash.jpg"
import Image2 from "../assets/roman-kraft-0EVKn3-5JSU-unsplash.jpg"
import Image3 from "../assets/national-cancer-institute-701-FJcjLAQ-unsplash.jpg"

export default function about() {
  return (
    <div id='About'>
      <div>
        <h2>About Us</h2>
        <div className='about-text'>
        <h1>Passion-Driven Care, Delivered to your Door</h1>
        <p>At Bary, we are committed to delivering exceptional home health care services tailored to meet your specific needs. Our experienced team of professionals provides compassionate and reliable care to enhance your quality of life and promote independence.</p>
        </div>
      </div>
      <div className='about-img-container'>
        <img src={Image1} alt='Health Care Images' className='Img1'/>
        <img src={Image2} alt='Health Care Images' className='Img2'/>
        <img src={Image3} alt='Health Care Images' className='Img3'/>
      </div>
    </div>
  )
}
