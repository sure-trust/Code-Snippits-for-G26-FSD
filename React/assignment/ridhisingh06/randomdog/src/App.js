// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [dogImage, setDogImage] = useState('');

    const fetchDogImage = async () => {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            setDogImage(response.data.message);
        } catch (error) {
            console.error("Error fetching the dog image", error);
        }
    };

    useEffect(() => {
        fetchDogImage();
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Random Dog Image</h1>
            {dogImage && <img src={dogImage} alt="A Random Dog" style={{ width: '300px', height: 'auto' }} />}
            <br />
            <button onClick={fetchDogImage}>Get Another Dog</button>
        </div>
    );
};

export default App;