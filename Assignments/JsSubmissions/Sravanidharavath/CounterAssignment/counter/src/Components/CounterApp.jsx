import React from 'react';
import { useState } from 'react';
import './CounterApp.css';

function CounterApp() {
    const [count,setCount]=useState(0);
  return (
    <div className='container'>
        <h1>Counter</h1>
        <div className='display'>
            <span>{count}</span>
        </div>
        <div className='button-group'>
            <button className='button increment' onClick={()=>setCount(count+1)}>Increment</button>
            <button className='button decrement' onClick={()=>setCount(count-1)}>Decrement</button>
            <button className='button reset' onClick={()=>setCount(0)}>Reset</button>
        </div>
    </div>
  )
}

export default CounterApp