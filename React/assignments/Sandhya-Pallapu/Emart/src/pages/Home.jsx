
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <img 
        src="/images/banner2.jpg" 
        alt="Shopping Banner" 
        className="home-banner" 
      />
      <h1 className="home-title">Welcome to Bewakoof</h1>
      <p className="home-description">Trendy Fashion. Affordable Prices.</p>
      <Link to="/Products">
        <button className="shop-button">Shop Now</button>
      </Link>
    </div>
  );
}

export default Home;
