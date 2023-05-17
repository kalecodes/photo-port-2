import React, { useState } from 'react';

const ContactForm = () => {
  // hook to manage form data, initializing empty values will clear form inputs on load
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  // destructure formState into its named properties to keep code dry
  const { name, email, message } = formState;

  // sync the internal state of the component formState with the user input from the DOM
  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value })
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  };

  return(
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" name="email" defaultValue={email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;