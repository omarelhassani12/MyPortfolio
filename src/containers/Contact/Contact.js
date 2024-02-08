// Contact.js
import React, { useState, useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { ImSpinner9 } from "react-icons/im";


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false); 
  const [emailSent, setEmailSent] = useState(false);

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 

    emailjs.send('service_wmv5xiw', 'template_lhhecmz', {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }, '6QcN0jXa3zI34bpF5')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormData({ name: '', email: '', message: '' });
        setLoading(false); 
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 2000);
      }, (error) => {
        console.error('Error sending email:', error.text);
        setLoading(false);
      });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <h2>Let's connect!</h2>
          <p>
            I'd love to hear from you; whether you want to learn more about my services, want to collaborate on a project, or simply just want to say hello.
          </p>
          <p>
            You can fill out the form on the left or get in touch with me at <a href="mailto:your.email@example.com">your.email@example.com</a>.
          </p>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? <ImSpinner9 /> : (emailSent ? 'Email sent successfully!' : 'Connect With Omar')}
            </button>
            </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
