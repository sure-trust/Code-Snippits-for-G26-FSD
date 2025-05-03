import React, { useState } from 'react';

function DogImage() {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchDog = async () => {
    setLoading(true);
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    setImageUrl(data.message);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={fetchDog}>Get Random Dog</button>
      {loading && <p>Loading...</p>}
      {imageUrl && <img src={imageUrl} alt="A cute dog" width="300" />}
    </div>
  );
}

export default DogImage;
