import React from 'react';
import './Gaming.css'; // Adjust the path if necessary

 // Add a CSS file for styling if needed

const Gaming = () => {
  return (
    <div className="gaming-page">
      <h1>Gaming Consoles for Rent</h1>
      <div className="gaming-content">
        <p>
          Dive into the world of gaming with the latest consoles available for rent. Whether you are a casual gamer or a pro, we have the right equipment for you to level up your gaming experience.
        </p>
        
        <div className="gaming-products">
          <div className="gaming-product">
            <img src="\game1.jpg" alt="PlayStation 5" className="gaming-image" />
            <h2>PlayStation 5</h2>
            <p>Enjoy next-gen gaming with the powerful PlayStation 5. Perfect for all types of gamers.</p>
            <p>Price: ₹2000/week</p>
            <button>Add to Cart</button>
          </div>

          <div className="gaming-product">
            <img src="\game1.jpg" alt="Xbox Series X" className="gaming-image" />
            <h2>Xbox Series X</h2>
            <p>Experience true 4K gaming with the fastest and most powerful Xbox ever.</p>
            <p>Price: ₹1800/week</p>
            <button>Add to Cart</button>
          </div>

          <div className="gaming-product">
            <img src="\game1.jpg" alt="Nintendo Switch" className="gaming-image" />
            <h2>Nintendo Switch</h2>
            <p>Portable gaming with the best of both worlds. Take your gaming wherever you go.</p>
            <p>Price: ₹1200/week</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaming;
