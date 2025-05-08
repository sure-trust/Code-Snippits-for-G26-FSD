import { useState } from "react";
import "./DataFetch.css";

function DataFetch() {
  const [dogData, setDogData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDogImg = async () => {
    setLoading(true);
    setError(""); // it will reset error state before fetching
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) throw new Error("Failed to fetch dog image");
      const data = await response.json();
      setDogData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dogCard">
      <div className="left-section">
        <input
          type="text"
          value="https://dog.ceo/api/breeds/image/random"
          disabled
        />
        <button onClick={fetchDogImg} disabled={loading}>
          Fetch!
        </button>
        {loading && <div className="spinner"></div>}
        {error && <div className="error-message">{error}</div>}
        <div className="json-data">
          <h4>JSON</h4>
          <pre>{dogData ? JSON.stringify(dogData, null, 2) : "{}"}</pre>
        </div>
      </div>

      <div className="right-section">
        <h3>Image</h3>
        {dogData && <img src={dogData.message} alt="Dog" />}
      </div>
    </div>
  );
}

export default DataFetch;