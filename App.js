import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RentechImage from 'C:/Users/ktgol/rentech/src/Rentech.png'; 
import Login from './login';
import Signup from './signup';
import Camera from './camera'; 
import Gaming from './Gaming'; 
import Speaker from './Speaker';
import VR from './vr';
import AvatarDropdown from './AvatarDropdown'; // Import the AvatarDropdown component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  const handleLogin = () => {
    setIsAuthenticated(true); // Set authenticated to true
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar background">
          <ul className="nav-list">
            <div className="logo">
              <img src={RentechImage} alt="xyz" />
            </div>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#how">How it works</a>
            </li>
            <li>
              <Link to="/login">Login/Signup</Link>
            </li>
            {isAuthenticated && (
              <li className="avatar-container"> {/* Updated class here */}
                <AvatarDropdown />
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/login" element={<Login onLogin={handleLogin} />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/camera" element={<Camera />} /> 
          <Route path="/gaming" element={<Gaming />} /> 
          <Route path="/speaker" element={<Speaker />} /> 
          <Route path="/VR" element={<VR />} /> 
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Rent the Latest Tech Gadgets</h1>
          <p>Affordable and convenient tech rentals for all your needs.</p>
          <a href="#rentals" className="cta-button">Browse Rentals</a>
        </div>
        <img src={RentechImage} alt="Tech Gadgets" className="hero-image" />
      </section>

      <section id="categories" className="categories">
        <h2>Explore Our Categories</h2>
        <div className="category-grid">
          <div className="category-item">
            <Link to="/gaming">
              <button>
                <img src="\game.png" alt="Gaming Console" style={{ width: '150px', height: 'auto' }} />
                <h3>Gaming Consoles</h3>
                <p>Experience gaming with the latest consoles. Perfect for weekend fun!</p>
              </button>
            </Link>
          </div>
          <div className="category-item">
            <Link to="/speaker">
              <button>
                <img src="\speaker.png" alt="Speakers" />
                <h3>Speakers</h3>
                <p>High-quality audio equipment for every occasion.</p>
              </button>
            </Link>
          </div>
          <div className="category-item">
            <Link to="/camera">
              <button>
                <img src="\camera.png" alt="Cameras" style={{ width: '150px', height: 'auto' }} />
                <h3>Cameras</h3>
                <p>Capture your moments with professional cameras.</p>
              </button>
            </Link>
          </div>
          <div className="category-item">
            <Link to="/VR">
              <button>
                <img src="\vr.png" alt="VR Headset" style={{ width: '200px', height: 'auto' }} />
                <h3>VR Headsets</h3>
                <p>Immerse yourself in virtual reality with cutting-edge VR headsets.</p>
              </button>
            </Link>
          </div>
          <div className="category-item">
            <Link to="/drones">
              <button>
                <img src="\drone.png" alt="Drones" style={{ width: '500px', height: 'auto' }} />
                <h3>Drones</h3>
                <p>Experience aerial views with high-tech drones.</p>
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className='hero2' id="how">
        <div className='hero-content2'>
          <h3>⫷   How It Works   ⫸</h3>
          <p>You will be required to pay a security deposit for the rented items.</p>
          <p>We offer flexible monthly and yearly rental plans for all products.</p>
          <ul>
            <li>Monthly Plans: Affordable rates for short-term rentals.</li>
            <li>Yearly Plans: Lower prices for long-term use.</li>
          </ul>
          <p>The security deposit is refundable upon the product's safe return.</p>
        </div>
      </section>

      <div className="foot">
        <p>BE TE sem 5 mini project</p>
      </div>
    </>
  );
}

export default App;
