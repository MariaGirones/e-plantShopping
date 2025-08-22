import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import './App.css';
import AboutUs from './components/AboutUs';
import Home from './components/Home';

// Componente principal que usa navegación
function AppContent() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/plants');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={
          <div className="landing-page">
            <div className="background-image"></div>
            <div className="content">
              <div className="landing_content">
                <h1>Welcome To Paradise Nursery</h1>
                <div className="divider"></div>
                <p>Where Green Meets Serenity</p>
                <button className="get-started-button" onClick={handleGetStartedClick}>
                  Get Started
                </button>
              </div>
              <div className="aboutus_container">
                <AboutUs/>
              </div>
            </div>
          </div>
        } />
        <Route path="/plants" element={<ProductList onHomeClick={handleHomeClick} />} />
      </Routes>
    </div>
  );
}

// Componente App que envuelve con Router
function App() {
  return (
    <Router basename="/e-plantShopping">
      <AppContent />
    </Router>
  );
}

export default App;


