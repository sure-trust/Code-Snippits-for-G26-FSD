import React, { useState } from 'react';
import './box.css'
const Box = () => {
  const [text, setText] = useState("");

  const handleClick = () => {
    const h3 = document.createElement('h3');
    h3.innerText = text; // Use the state variable, not event
    document.querySelector('.box').appendChild(h3); // Add to box div
  };

  const Remove = () => {
    const h3s = document.getElementsByTagName('h3');
    for (let i = 0; i < h3s.length; i++) {
      h3s[i].innerText = "";
    }
  };
  

  return (
    <div className='box'>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Type something..."
      />
      <button onClick={handleClick}>Add</button>
      <button onClick={Remove}>Remove</button>
    </div>
  );
};

export default Box;
