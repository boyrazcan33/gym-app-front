import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import profileImage from '../assets/profile.jpg';

const About = () => {
  return (
    <div className="about">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h1>About Me</h1>
      <p>Hello, I'm your personal trainer. I have been certified by ISSA.</p>
      <button onClick={() => window.open('https://www.issaonline.com/company/certificate-validation', '_blank')}>
        Verify Certification
      </button>
    </div>
  );
};

export default About;
