import React, { useState } from 'react';
import './camera.css'; 
function Cameras() {
  const [cart, setCart] = useState([]);

  const addToCart = (camera) => {
    setCart([...cart, camera]);
  };

  const cameras = [
    {
      name: 'Canon EOS 1500D',
      price: '₹ 25,999',
      image: '/camera1.jpg', // Provide the correct image path
    },
    {
      name: 'Nikon D3500',
      price: '₹ 31,999',
      image: '/camera1.jpg',
    },
    {
      name: 'Sony Alpha ILCE-6400',
      price: '₹ 68,499',
      image: '/camera1.jpg',
    },
  ];

  return (
    <div>
      <h2>Cameras for Rent</h2>
      <div className="product-grid">
        {cameras.map((camera, index) => (
          <div key={index} className="product-item">
            <img src={camera.image} alt={camera.name} style={{ width: '200px', height: 'auto' }} />
            <h3>{camera.name}</h3>
            <p>Price: {camera.price}</p>
            <button onClick={() => addToCart(camera)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h3>Shopping Cart</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cameras;
