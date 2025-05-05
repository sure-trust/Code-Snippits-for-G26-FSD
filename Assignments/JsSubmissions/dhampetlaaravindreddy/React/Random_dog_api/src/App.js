import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [dogImage, setDogImage] = useState("");

  const fetchDog = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error("Failed to fetch dog image", error);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="container">
      <div className="card">
        {dogImage && (
          <img src={dogImage} alt="Random Dog" className="dog-image" />
        )}
        <button onClick={fetchDog} className="fetch-button">
          Get Another Dog
        </button>
      </div>
    </div>
  );
}

export default App;
