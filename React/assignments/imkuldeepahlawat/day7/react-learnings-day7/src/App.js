import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ChildA from './components/ChildA';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';
import { Demo } from './components/Demo';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [userDetailState, setUserDetail] = useState({
    name: 'Kuldeep Ahlawat',
    work: 'Engineering'
  })

  function handleChangeUser(updatedState) {
    setUserDetail(updatedState)
  }

  // return (
  //   <div className="App">
  //     <h1>
  //       App.js
  //     </h1>
  //     <ChildA userDetails={userDetailState} handleChange={handleChangeUser}/>
  //   </div>
  // );
  return (<div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Tooltip title="im a MUI Component">

      <Button variant="contained">Im button</Button>
      <CircularProgress />
    </Tooltip>
    <ChakraProvider>

    <Demo/>
    </ChakraProvider>
  </div>)
}

export default App;
