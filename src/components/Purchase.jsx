import React, { useState } from 'react';
import '../styles/Purchase.css';
import creditCardGif from '../assets/credit-card (1).gif';
import contactlessImg from '../assets/contactless.png';

const Purchase = () => {
  const [cardholder, setCardholder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [healthIssues, setHealthIssues] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      cardholder, cardNumber, expiryDate, cvc, name, age, height, weight, healthIssues, phone, email
    });
    alert('Form submitted!');
  };

  return (
    <div className="purchase-page">
      <div className="order-summary">
        <h2>Your Order</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personal Training</td>
              <td>1</td>
              <td>50 EUR</td>
              <td>50 EUR</td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td>50 EUR</td>
            </tr>
          </tbody>
        </table>
        <img src={creditCardGif} alt="Credit Card GIF" className="credit-card-gif" />
        <img src={contactlessImg} alt="Contactless" className="contactless-img" />
      </div>
      <div className="payment-form">
        <h2>Credit Card Info</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Cardholder
            <input type="text" value={cardholder} onChange={(e) => setCardholder(e.target.value)} required />
          </label>
          <label>
            Card Number
            <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
          </label>
          <label>
            Expiry Date
            <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
          </label>
          <label>
            CVC
            <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} required />
          </label>
          <h2>Personal Information</h2>
          <label>
            Name
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Age
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
          </label>
          <label>
            Height
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
          </label>
          <label>
            Weight
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
          </label>
          <label>
            Health Issues
            <input type="text" value={healthIssues} onChange={(e) => setHealthIssues(e.target.value)} />
          </label>
          <label>
            Phone
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </label>
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <button type="submit">Accept</button>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
