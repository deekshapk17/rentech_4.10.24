import React from 'react';
 // Optional: create a separate CSS file for VR styling

const VR = () => {
  const vrProducts = [
    {
      name: 'Oculus Quest 2',
      price: '₹25,000',
      description: 'All-in-one VR headset with a library of games and experiences.',
      imageUrl: '/images/oculus-quest-2.png', // Replace with your image path
    },
    {
      name: 'HTC Vive Pro',
      price: '₹50,000',
      description: 'High-resolution display and advanced tracking for a premium VR experience.',
      imageUrl: '/images/htc-vive-pro.png', // Replace with your image path
    },
    {
      name: 'Sony PlayStation VR',
      price: '₹20,000',
      description: 'Immerse yourself in PS4 games with this affordable VR headset.',
      imageUrl: '/images/ps-vr.png', // Replace with your image path
    },
    {
      name: 'Valve Index',
      price: '₹55,000',
      description: 'Advanced tracking, high-quality visuals, and ergonomic design.',
      imageUrl: '/images/valve-index.png', // Replace with your image path
    },
  ];

  return (
    <div className="vr-container">
      <h1>VR Headsets for Rent</h1>
      <div className="vr-product-grid">
        {vrProducts.map((product, index) => (
          <div className="vr-product-card" key={index}>
            <img src={product.imageUrl} alt={product.name} className="vr-product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Price: {product.price}</strong></p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VR;
