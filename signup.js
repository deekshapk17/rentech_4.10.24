import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Signup.css';

function Signup() {
  const navigate = useNavigate(); // Create navigate instance
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name Validation
    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name must contain only alphabets';
    }

    // Mobile Number Validation
    if (!/^\d+$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must contain only numbers';
    }

    // Email Validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Password Validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.password = 'Passwords do not match';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // If no errors, the form is valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowModal(true); // Show the modal on successful signup
      // Redirect to homepage after a short delay
      setTimeout(() => {
        navigate('/'); // Redirect to homepage
      }, 2000); // Adjust the timeout duration as needed
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Amazing gadgets waiting just for you Sign up</h1>

        {/* Name Field */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        {/* Mobile Number Field */}
        <label>Mobile No:</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <p className="error">{errors.mobile}</p>}

        {/* Email Field */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Gender Selection */}
        <label>Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* Password Field */}
        <label>Create Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {/* Confirm Password Field */}
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Signup</button>
      </form>

      {/* Modal for successful signup */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Signup Successful!</h2>
            <p>Welcome to our platform!</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
