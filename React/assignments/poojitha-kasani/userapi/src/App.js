import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => {
        if (!res.ok) throw new Error('No user found');
        return res.json();
      })
      .then(data => {
        setUser(data);
        setError('');
      })
      .catch(err => {
        setUser(null);
        setError('No user found');
      });
  }, [userId]);

  const increase = () => setUserId(prev => prev + 1);
  const decrease = () => setUserId(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="App">
      <h1>User Api Assignment</h1>
      <div className="input-group">
        <input type="number" value={userId} readOnly />
        <div>
          <button className="green" onClick={increase}>Increase</button>
          <button className="red" onClick={decrease}>Decrease</button>
        </div>
      </div>
      {user ? (
        <div className="user-card">
          <h3>Poojitha</h3> {/* Overriding name */}
          <p>Email: poojitha@gmail.com</p> {/* Overriding email */}
        </div>
      ) : (
        <p className="error">{error}</p>
      )}
    </div>
  );
}

export default App;
