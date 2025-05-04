import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { TestComponent } from './component/Test';

function App() {

  // const [userLoginState, setUserLoginState] = useState(true)



  // setTimeout(()=>{
  //   setUserLoginState(false)
  // },3000)

  // if(userLoginState){
  //   return <>Data is loading</>
  // }

  // return <>data is loaded</>





  // return (
  //   <div className="App">
  //     {`${userLoginState}`}

  //     <div>
  //       {
  //         userLoginState === true ? <button onClick={() => {
  //           if (userLoginState === true) {

  //             setUserLoginState(
  //               false
  //             )
  //           }

  //         }}>Logout</button> : <button onClick={() => {
  //           if (userLoginState === false) {

  //             setUserLoginState(
  //               true
  //             )
  //           }


  //         }}>Login </button>
  //       }

  //     </div>
  //   </div>
  // );
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // let button;
  // if (isLoggedIn) {
  //   button = <button>Log out</button>;
  // } else {
  //   button = <button>Log in</button>;
  // }

  // return <div>{button}</div>;


  const namesList = ['Kuldeep', 'kuldeep is nerd', 'kuldeep is mentor', 'kuldeep is the best mentor', 'Kuldeep made learning an adventure' ]
  // const namesList = [
  //   <TestComponent name={'kuldeep'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />,
  //   <TestComponent name={'kuldeep is mentor'} />
  // ]
  return <>
    {namesList.map((IndexElement,index) => {
      return (
        <div key={index+IndexElement}>
          Index{index}{'     '}
          <span>

          <TestComponent name={IndexElement} />
          </span>
        </div>
      )
    })}
    {/* {namesList} */}
  </>
}

export default App;
