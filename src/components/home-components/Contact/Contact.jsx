//@flow
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import type { ContactForm } from '../../../../types/types';
import Input from '../../miscellaneous/Input/Input';
import './Contact.scss';

function Contact(props: Object) {

  const contactForm: Object = {
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    body: '',
  }

  const [form, setForm] = useState(contactForm);

  const handleFormInput = (key: string, value: string): void => setForm({...form, [key]: value});

  const submitForm = (): void => {
    const { email, phone, firstName, lastName, body } = form;

    const payload: ContactForm = {
      email,
      phone,
      name: `${firstName} ${lastName}`,
      body,
    }

    fetch('/send-contact-form',{
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(data => console.log(data));
  }

  const { contactRef } = props;
  return (
    <>
      <h1 className="home-section-heading" ref={contactRef}>Contact</h1>
      <div className="contact-wrap">
        <div className="contact-row">
          <Input
            handleInput={handleFormInput}
            placeholder="Email Address"
            stateKey="email"
          />
          <Input
            handleInput={handleFormInput}
            placeholder="Phone Number"
            stateKey="phone"
          />
        </div>
        <div className="contact-row">
          <Input
            handleInput={handleFormInput}
            placeholder="First Name"
            stateKey="firstName"
          />
          <Input
            handleInput={handleFormInput}
            placeholder="Last Name"
            stateKey="lastName"
          />
        </div>
        <textarea
          className="contact-textarea"
          onInput={() => handleFormInput('body', event.target.value) }
        />
        <button
          className="contact-button"
          onClick={submitForm}
          type="button"
        >
          SEND
        </button>
      </div>
    </>
  )
}

export default Contact;
