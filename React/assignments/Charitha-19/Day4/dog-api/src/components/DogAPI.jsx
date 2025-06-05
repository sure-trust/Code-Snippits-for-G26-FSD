import React, { useState } from "react";
import "./DogAPI.css";

const DogAPI = () => {
  const [dogImage, setDogImage] = useState("");
  const [jsonResponse, setJsonResponse] = useState(null);

  const fetchDogImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDogImage(data.message);
    setJsonResponse(data);
  };

  return (
    <div className="dogapi">
      <h2>Dog API</h2>
      <input
        type="text"
        value="https://dog.ceo/api/breeds/image/random"
        readOnly
      />
      <button onClick={fetchDogImage}>Fetch!</button>

      <div className="descr">
        <div className="json-box">
          <h3>JSON</h3>
          <pre>{JSON.stringify(jsonResponse, null, 2)}</pre>
        </div>
        {dogImage && (
          <div className="image-box">
            <h3>IMAGE</h3>
            <img src={dogImage} alt="Random Dog" />
          </div>
        )}
      </div>
    </div>
  );
};

export default DogAPI;
