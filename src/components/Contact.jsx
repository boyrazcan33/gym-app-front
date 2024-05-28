import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';
import contactImage from '../assets/operator.png';

const Contact = () => {
  return (
    <div className="contact">
      <img src={contactImage} alt="Operator" className="contact-image" />
      <h1>Contact Me</h1>
      <p>Email: your-email@example.com</p>
    </div>
  );
};

export default Contact;
