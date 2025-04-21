import React, { useState } from 'react'

const CounterApp = () => {
const [count,setCount] = useState(0)


  // let count = 0
  return (
    <div>
      <button onClick={()=>{
        console.log('inc Count')
        setCount(count+1)
      }}>Click To Increase Count</button>
      <p >{count}</p>
      <button onClick={()=>{
        console.log('dec Count')
        setCount(count-1)

      }}>Click To decrease Count</button>

    </div>
  )
}

export default CounterApp