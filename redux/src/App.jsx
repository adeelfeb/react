import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
    <div className='p-8'>
    <h1 className='p-5 bg-blue-400 mx-8 my-8 rounded-lg text-bold text-4xl text-center'>Todo Project <br /> (for Redux-ToolKit understanding!)</h1>
    <Todos/>
    <AddTodo/>
    </div>
    </>
  )
}

export default App
