// src/Speaker.js
import React from 'react';
 // Optional: You can create a separate CSS file for Speaker styling

function Speaker() {
  return (
    <div className="speaker-page">
      <h1>Speakers for Rent</h1>
      <div className="speaker-grid">
        <div className="speaker-item">
          <img src="/speaker1.jpg" alt="High-Quality Speaker" />
          <h3>High-Quality Speaker</h3>
          <p>Experience crystal clear sound with our top-notch speakers.</p>
          <p>Price: ₹1,500/month</p>
          <button>Add to Cart</button>
        </div>

        <div className="speaker-item">
          <img src="/speaker2.jpg" alt="Portable Bluetooth Speaker" />
          <h3>Portable Bluetooth Speaker</h3>
          <p>Perfect for parties or outdoor activities.</p>
          <p>Price: ₹1,000/month</p>
          <button>Add to Cart</button>
        </div>

        <div className="speaker-item">
          <img src="/speaker3.jpg" alt="Home Theater Speaker" />
          <h3>Home Theater Speaker</h3>
          <p>Enhance your movie experience with surround sound.</p>
          <p>Price: ₹2,500/month</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Speaker;
