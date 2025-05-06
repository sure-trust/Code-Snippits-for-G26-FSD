import './App.css';

import React, { useEffect, useState } from "react";

const RandomDog = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDogImage = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="image_div">
      <h1 className="Image_text">Random Dog Image</h1>
      
      <div id="image_container">
        {loading ? (
        <p>Loading...</p>
      ) : (
          <img src={dogImage} alt="Random Dog" width = "500px" height="500px" className="image_size" />
      )}
      </div>
      <button
        onClick={fetchDogImage}
        className="fetch_image_button"
      >
        Get New Dog
      </button>
    </div>
  );
};

export default RandomDog;
