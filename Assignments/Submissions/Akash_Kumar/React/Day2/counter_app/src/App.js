import logo from './logo.svg';
import './App.css';


function App() {
  let countValue = 0

  return (
    <>
      <div id="main_container">

        <div id="counterstatus"> 0 </div>

        <div id="buttons">
          <button id="increment" onClick = {
            () => {
              countValue = countValue + 1;
              document.getElementById("counterstatus").innerHTML = countValue }
            }>+</button>
            
          <button id="decrement" onClick = {
            () => {
              countValue = countValue - 1;
              document.getElementById("counterstatus").innerHTML = countValue }
          }>-</button>
          
        </div>

      </div>
    </>
  );
}

export default App;
