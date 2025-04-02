import React from 'react';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-brand'><h1>Bary.</h1></div>
      
      <div className='footer-subscribe'>
        <h4>Stay Connected with Us</h4>
        <label>Email*<input type='email' required/></label>
        <label><input type='checkbox' required/> Yes, subscribe me to your newsletter.*</label>
        <button>Submit</button>
      </div>
      
      <div className='footer-contact'>
        <a href='tel:+911234567890'>123-456-7890</a>
        <a href='mailto:info@mysite.com'>info@mysite.com</a>
        <span>500 Terry Francine St.</span>
        <span>San Francisco, CA 94158</span>
      </div>
      
      <div className='footer-legal'>
        <span>Privacy Policy</span>
        <span>Accessibility Statement</span>
        <span>&copy; 2035 by Bary. Powered and secured by <a href='#'>Wix</a></span>
      </div>
    </footer>
  );
}
