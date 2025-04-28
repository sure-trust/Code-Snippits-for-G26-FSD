
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {


  // const [dogUrl,setDogUrl]= useState('')
  const [helloState, setHelloState] = useState('')
  const [helloState2, setHelloState2] = useState('')
  // const timerRef = useRef()
  // those dont need cleanups

  useEffect(() => {

    // (async()=>{
    //   const response = await fetch('https://dog.ceo/api/breeds/image/random')
    //   const parsed = await response.json()
    //   setDogUrl(parsed.message)

    //   console.log(parsed)

    // })()


    // timerRef.current =setInterval(()=>{
    //   console.log('im tamraj kilvish')
    // },2000)
    // window.addEventListener('click',()=>{
    //   console.log('do something')
    // })
    console.log('onUpdate the state is', helloState)


      setHelloState2(helloState2 +helloState + '  im a good boy')
    


    // cleanup
    // return () => {
    // you cleanup stuff
    // clearInterval(timerRef.current)
    // window.removeEventListener('click',()=>{
    //   console.log('do something')
    // })
    // }


  }, [helloState])
  const handleClick = () => {
    setHelloState('Hello'+parseInt(Math.random()*100000000))
  }
  return (
    <div className="App">
      {/* <img src={dogUrl}/> */}
      <button onClick={handleClick}>Click on mee</button> <p>{helloState}</p>
      <p>{helloState2}</p>
    </div>
  );
}

export default App;
