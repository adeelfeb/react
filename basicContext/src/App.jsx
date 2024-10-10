import { useState } from 'react'
import Login from './components/Login';
import User from './components/User';

import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login/>
      <User/>
    </UserContextProvider>
  )
}

export default App
