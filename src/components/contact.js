import React from 'react';


export default function Contact() {
  return (
    <div className='contact-container'id='contacts'>
      <form className='contact-form'>
        <h3>Contact Us</h3>
        <label>First Name*<input type='text' required/></label>
        <label>Last Name*<input type='text' required/></label>
        <label>Email*<input type='email' required/></label>
        <label>Phone<input type='number'/></label>
        <label>Title*<input type='text' required/></label>
        <label>Message<textarea rows='4'/></label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
