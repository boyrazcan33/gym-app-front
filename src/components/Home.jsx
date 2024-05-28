import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import profileImage from '../assets/profile.jpg';
import deadliftGif from '../assets/deadlift.gif';
import muscleGif from '../assets/muscle.gif';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Lihtne Gym</h1>
      <p>Your journey to fitness starts here.</p>
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className="gif-container">
        <img src={deadliftGif} alt="Deadlift Gif" className="home-gif" />
        <img src={muscleGif} alt="Muscle Gif" className="home-gif" />
      </div>
    </div>
  );
};

export default Home;
