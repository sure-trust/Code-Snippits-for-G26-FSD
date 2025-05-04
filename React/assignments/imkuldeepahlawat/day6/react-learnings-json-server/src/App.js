import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName]= useState('')
  return (
    <div className="App">
      {/* e satnd for event */}
      <input value={name} placeholder='name' onChange={(e)=>{
        setName(e.target.value)
      }} />
      <button onClick={()=>{
        const postdata = {
          "name":name
        }
        fetch('http://localhost:3001/test',{
          method: "POST",
          body: JSON.stringify(postdata)
        })

      }}>Submit</button>
    </div>
  );
}

export default App;
