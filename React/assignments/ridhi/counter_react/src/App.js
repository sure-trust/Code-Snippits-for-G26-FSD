import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>Counter: {count}</h1>
      <button className="increment" onClick={increment}>Increment</button>
      <button className="decrement" onClick={decrement}>Decrement</button>
      <div>
      <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default App;