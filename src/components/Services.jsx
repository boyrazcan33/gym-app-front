import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const servicesData = [
  { id: 1, name: 'Chest One', color: 'red', text: 'Builds upper body strength and aesthetics.' },
  { id: 2, name: 'Chest Two', color: 'red', text: 'Builds strength and aesthetics.' },
  { id: 3, name: 'Back One', color: 'blue', text: 'Enhances posture, grip strength, and muscle balance.' },
  { id: 4, name: 'Back Two', color: 'blue', text: 'Enhances posture and muscle balance.' },
  { id: 5, name: 'Leg One', color: 'green', text: 'Boosts overall strength and functional movement.' },
  { id: 6, name: 'Leg Two', color: 'green', text: 'Boosts overall strength and movement.' },
  { id: 7, name: 'Glute', color: 'purple', text: 'Strengthens lower body and promotes stability.' },
  { id: 8, name: 'Shoulder', color: 'orange', text: 'Improves shoulder stability and upper body aesthetics.' },
  { id: 9, name: 'Arm', color: 'lightblue', text: 'Enhances arm strength and muscle definition.' },
];

const Services = () => {
  const [visible, setVisible] = useState(Array(servicesData.length).fill(false));

  const toggleVisibility = (index) => {
    const newVisible = [...visible];
    newVisible[index] = !newVisible[index];
    setVisible(newVisible);
  };

  return (
    <div className="services">
      <h1>Services</h1>
      <div className="service-boxes">
        {servicesData.map((service, index) => (
          <div key={service.id} className="service-box" style={{ backgroundColor: service.color }}>
            <h2>{service.name}</h2>
            <button onClick={() => toggleVisibility(index)}>
              {visible[index] ? 'Hide Outcomes' : 'Show Outcomes'}
            </button>
            {visible[index] && <p>{service.text}</p>}
            <Link to="/purchase">
              <button className="buy-button">Buy It</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
