import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faHandshake , faHeartPulse } from '@fortawesome/free-solid-svg-icons';


export default function benefits() {
  return (
    <div id='Benefits'>
      <h2>Benefits</h2>
      <div className='benefits-text'>
        <h1>Why We Stand Out</h1>
        <p>At Bary, we prioritize patient well-being and offer personalized care plans to meet individual needs. Our team of skilled professionals ensures your comfort and safety at all times, providing reliable and compassionate support.</p>
      </div>
      <div className='benefits-text2'>
        <div className='benefits-info'>
        <FontAwesomeIcon icon={faHandHoldingHeart} id='Icon'/>
        <div className='Info-card'id='Info-card1'>
            <h5>Compassionate Care</h5>
            <p>Our dedicated caregivers provide compassionate support and assistance, ensuring you receive the care and attention you deserve. We focus on building strong relationships with our talented team, fostering trust and personalized care.</p>
        </div>
        </div>
        <div className='benefits-info'id='Info-card2'>
        <div className='Info-card'>
            <h5>Professional Team</h5>
            <p>Our experienced team or
a ted nuntes and therapists
deliver high-quality care services to meet your health and weliness gosis. We are dedicated to ensuring the best possible outcomes for our cherts through expertise and con mere</p>
</div>
<FontAwesomeIcon icon={faHandshake} id='Icon'/>
        
      </div>
      <div className='benefits-info'>
      <FontAwesomeIcon icon={faHeartPulse} id='Icon'/>
        <div className='Info-card' id='Info-card1'>
            <h5>Personalized Approach</h5>
            <p>We believe in a personalized approach to care, tailoring our services to your unique needs and preferences. Our goal is to empower you to live your best life with the support and assistance you need</p>
        </div>
        </div>
    </div>
    </div>
  )
}
