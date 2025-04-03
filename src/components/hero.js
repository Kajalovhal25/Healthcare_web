import React from 'react'
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function navbar() {
  return (
    <div id='hero'>
      <nav>
      <h4 id='logo'>Bary Healthcare</h4>
      <FontAwesomeIcon icon={faBars} id='Bars'/>
        <ul className='nav-list'>
          <li><a href='#About'>About</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#Benefits'>Benefits</a></li>
          <li><a href='#team'>Meet the Team</a></li>
          <li><a href='#testimonials'>Testimonials</a></li>
          </ul>
          <li><a href='#contacts' id='contact'>Contact Us</a></li>
      </nav>
        <div className='hero-text-container'>
            <h2 className='hero-text-heading'>Discover Quality Care</h2>
            <h4 className='hero-text-head2'>Customized and Reliable Health
            Care Right at your Home</h4>
            <p className='hero-text-p'>Welcome to Bary, where we prioritize your health and well-being with personalized home health care services. Our dedicated team ensures you receive the highest quality care in the comfort of your own home</p>
            <button className='hero-text-btn'>Contact Us</button>
        </div>
    </div>
  )
}
