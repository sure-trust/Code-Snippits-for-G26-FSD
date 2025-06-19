import React from 'react';
import MainUserInterface from './components/MainUserInterface';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <MainUserInterface />
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;