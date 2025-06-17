import React, { useState } from 'react';
import './App.css';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDogImage = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error('Failed to fetch dog image', error);
    }
    setLoading(false);
  };

  return (
    <>
      <h1>Random Dog API</h1>
      <button onClick={fetchDogImage}>Fetch Dog</button>

      {loading ? <p>Loading...</p> : null}

      <br></br>
      {dogImage && !loading ? <img src={dogImage} alt="A random dog" /> : null}
    </>
  );
}

export default App;
