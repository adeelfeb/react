import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='flex align-center p-4 text-black text-4xl text-bold bg-pink-500 rounded-xl mx-4 my-8'>Hi there</h1>
    </>
  )
}

export default App
