// AvatarDropdown.js
import React, { useState } from 'react';
import './AvatarDropdown.css'; // Create a CSS file for styling

const AvatarDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="avatar-container">
      <div className="avatar" onClick={toggleDropdown}>
        <img src="/icon.png" alt="User Avatar" className="avatar-image" />
      </div>
      {dropdownOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><a href="/profile">My Profile</a></li>
            <li><a href="/Cart">Cart</a></li>
            <li><a href="/orders">Orders</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
