import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import MenPage from './components/MenPage';
import WomenPage from './components/WomenPage';
import MobileCoversPage from './components/MobileCoversPage';

function HomePage() {
  return (
    <>
      <Banner />
      <CategorySection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/mobile-covers" element={<MobileCoversPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
