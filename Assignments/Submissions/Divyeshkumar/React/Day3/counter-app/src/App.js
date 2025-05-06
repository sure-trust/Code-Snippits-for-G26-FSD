import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="container">
      <h1 className="title">Counter App</h1>
      <h2 className="count">{count}</h2>
      <button onClick={decrement} className="button">-</button>
      <button onClick={increment} className="button">+</button>
    </div>
  );
}

export default App;
