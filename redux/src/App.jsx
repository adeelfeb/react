import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='p-5 bg-red-400 mx-8 my-8'>Hi there </h1>
    </>
  )
}

export default App