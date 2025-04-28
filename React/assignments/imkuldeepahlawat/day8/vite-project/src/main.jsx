import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kuldeep" element={<App />} />
        <Route path="/vipul" element={<App />} />
      </Routes> */}
    </BrowserRouter>
  </StrictMode>,
)
