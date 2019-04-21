/* eslint-disable no-unused-vars */
import React from 'react';
import Input from '../../miscellaneous/Input/Input';
import './Contact.scss';

function Contact() {
  return (
    <>
      <h1 className="home-section-heading">Contact</h1>
      <div className="contact-wrap">
        <div className="contact-row">
          <Input placeholder="Email Address" />
          <Input placeholder="Phone Number" />
        </div>
        <div className="contact-row">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </div>
        <textarea className="contact-textarea" />
        <button className="contact-button">
          SEND
        </button>
      </div>
    </>
  )
}

export default Contact;
