import React, { useState } from "react";

const Dog = () => {
  const [dog, setDog] = useState(
    "https://images.dog.ceo/breeds/beagle/n02088364_12124.jpg"
  );
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("success");
  const [text] = useState("https://dog.ceo/api/breeds/image/random");

  const fetchDogImage = async () => {
      const response = await fetch(text);
      const data = await response.json();
      setDog(data.message);
      setStatus(data.status);
      setLoading(false);
  };

  const handleFetch = () => {
    fetchDogImage();
  };

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      fetchDogImage();
    }, 2000);
  };

  return (
    <div className="main-container">
      <div className="container1">
        <input
          type="text"
          className="random-value"
          value={text}
          readOnly
        />
        <button onClick={handleFetch} disabled={loading}>
          Fetch
        </button>
        <button onClick={handleLoading} disabled={loading}>
          Loading..
        </button>
      </div>

      <div className="container2">
        <div className="container4">
          <h4>IMAGE</h4>
          <img src={dog} alt="Random Dog" />
        </div>
        <div className="container3">
          <h4>JSON</h4>
          <pre>{JSON.stringify({ message: dog, status }, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default Dog;
