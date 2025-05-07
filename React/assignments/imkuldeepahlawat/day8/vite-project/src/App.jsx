import { useState } from 'react'
import { Routes, Route, Link } from "react-router";
import { useParams } from "react-router";
import './App.css'
import Users from './Users';
import UsersPhone from './Users copy';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Routes>
        <Route path='/' element={<>
          <span>
            Home
          </span>
          <Link to="/users/1234/u/712384798"> Go To user  Phone</Link>
          <Link to="/login"> Go To login</Link>
          <Link to="/logout"> Go To logout</Link>
        </>} />
        <Route path='users/:userId' element={<Users />} />
        <Route path='login' element={<>
          <span>
            Login
          </span>

          <Link to="/"> Go To home</Link>
        </>} />
        <Route path='logout' element={<>
          <span>
            Logout
          </span>

          <Link to="/"> Go To home</Link>
        </>} />
        <Route path='users/:userId/u/:phonenumber' element={<UsersPhone />} />

        <Route path='/profile' element={<>This is kuldeep</>} />
        <Route path='/contactus' element={<>imkuldeepahlawat@gmail.com</>} />
        <Route path='/team' element={<>One man show</>} />
        <Route path='/secret-admin-page' element={<>This is secret route only accesasble for admin</>} />
      </Routes>

    </>
  )
}

export default App
