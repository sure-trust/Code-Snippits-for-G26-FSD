import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  function customInput() {
    const value = prompt('Start from:');
    const num = parseInt(value);
    isNaN(num) ? setCount(0) : setCount(num);
  }
  return (
    <>
      <div>
        <h1>Counter App</h1>
        <div className="start-refresh">
          <div>
            <button onClick={customInput}>
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
          <div>
            <button onClick={() => setCount(0)}>
              <i className="fa-solid fa-rotate-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="button-Box">
        <div>
          <button onClick={() => setCount(count - 1)}>
            <i className="fa-solid fa-minus"></i>
          </button>
        </div>
        <div className="count"> {count} </div>
        <div>
          <button onClick={() => setCount(count + 1)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
