import React, { useState } from 'react';

const Dogfetcher=()=> {
  const [dogData, setDogData] = useState(null);

  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogData(data);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  return (
    <div id='one'>
      <h2>https://dog.ceo/api/breeds/image/random</h2>
      <button onClick={fetchDogImage} id="btn">Fetch</button>


      {dogData && (
        <>
          <h3>JSON</h3>
          <pre>
            {JSON.stringify(dogData,null,5)}
          </pre>

          <h3>IMAGE</h3>
          <img src={dogData.message} alt="Random Dog" />
          </>
      )}
    </div>
  );
};

export default Dogfetcher
