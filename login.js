import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './Login.css';

function Login({ onLogin }) { // Receive onLogin as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Create navigate instance
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check credentials
    if (email === 'admin@gmail.com' && password === '123') {
      onLogin(); // Call the onLogin function passed from App
      navigate('/'); // Redirect to homepage on successful login
    } else {
      setError('Invalid email or password.'); // Set error message
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        {error && <p className="error">{error}</p>} {/* Show error message if any */}
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p className="register-link">
          New to us? <Link to="/signup" className='link'>Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
