import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
const [count,setCounter] = useState(0)
function inc(){
    setCounter(count+1)
}
function inc2(){
    setCounter(count+2)
}
function inc5(){
    setCounter(count+5)
}
function dec(){
    setCounter(count-1)
}
function dec2(){
    setCounter(count-2)
}
function dec5(){
    setCounter(count-5)
}
function set(){
    setCounter(0)
}
  return (
    <>
    <div className='box'>
      <button onClick={dec}>-1</button>
      <button onClick={dec2}>-2</button>
      <button onClick={dec5}>-5</button>
      <h1 className='cross'>{count}</h1>
      <button onClick={inc}>+1</button>
      <button onClick={inc2}>+2</button>
      <button onClick={inc5}>+5</button>

    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height: '100vh' }}>
  <button onClick={set} style={{}}>Reset</button>
</div>

    </>
  )
}

export default Counter