
import { useState } from 'react';
import CounterApp from './components/CounterApp';

function App() {
  const[count,setCount] = useState(0);
  return (
    <>
      <CounterApp />
    </>
  );
}


export default App;
