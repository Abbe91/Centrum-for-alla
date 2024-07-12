import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Nav from '../components/Nav/Nav';

const Forfragan = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zrzoy78', // replace with your EmailJS service ID
      'template_v5pxpfk', // replace with your EmailJS template ID
      
    )
    .then((result) => {
      console.log(result.text);
      setMessageSent(true);
      setError(null);
    }, (error) => {
      console.log(error.text);
      setError('Failed to send message. Please try again later.');
    });
  };

  return (
    <div style={{ height: '800px', maxWidth: '900px', margin: '0 auto', marginTop: '150px' }}>
      <Nav />
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
        <h2>Contact Admin</h2>
        {messageSent && <p style={{ color: 'green' }}>Message sent successfully!</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="name">Name</label>
          <input type="text" name="user_name" required style={{ marginBottom: '1rem', padding: '0.5rem' }} />

          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" required style={{ marginBottom: '1rem', padding: '0.5rem' }} />

          <label htmlFor="message">Message</label>
          <textarea name="message" rows="5" required style={{ marginBottom: '1rem', padding: '0.5rem' }}></textarea>

          <button type="submit" style={{ padding: '0.5rem', background: '#4890e3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forfragan;
