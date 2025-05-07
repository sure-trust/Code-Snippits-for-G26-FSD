import { useState } from "react";
import "./DataFetch.css";
function DataFetch() {
  const [dogData, setdog] = useState(null);
  const [load, setload] = useState(false);
  function handleLoadingClick() {
    setload(true);
    setTimeout(() => {
      console.log("Loading");
      setload(false);
    }, 2000);
  }
  function fetchDogImg() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setdog(data));
  }

  return (
    <div className="dogCard">
      <div className="left-section">
        <input
          type="text"
          value="https://dog.ceo/api/breeds/image/random"
          disabled
        />
        <button onClick={fetchDogImg}>Fetch!</button>
        <button onClick={handleLoadingClick}>Loading</button>
        {load && <div className="spinner"></div>}

        <div className="json-data">
          <h4>JSON</h4>
          <pre>{dogData ? JSON.stringify(dogData, 2) : "{}"}</pre>
        </div>
      </div>

      <div className="right-section">
        <h3>Image</h3>
        {dogData && <img src={dogData.message} alt="Dog API" />}
      </div>
    </div>
  );
}
export default DataFetch;
