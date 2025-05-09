import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchDog = () => {
    setLoading(true);
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">Random Dog</h1>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        dogImage && <img src={dogImage} alt="Dog" className="dog-image" />
      )}
      <button onClick={fetchDog} className="fetch-button">
        New Dog
      </button>
    </div>
  );
}

export default App;
