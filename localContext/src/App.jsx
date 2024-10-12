import { useState } from 'react'
import { TodoProvider } from './contexts/index'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])  // Corrected to setTodos

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, newMessage) => {
    setTodos((prev) =>
      prev.map((prevTodo) => 
        prevTodo.id === id 
          ? { ...prevTodo, todo: newMessage }  // Only update the 'todo' message
          : prevTodo
      )
    );
  };
  

  // const updateTodo = (id, updatedTodo) => {  // Renamed 'todo' to 'updatedTodo' for clarity
  //   setTodos((prev) =>
  //     prev.map((prevTodo) => 
  //       prevTodo.id === id ? { ...prevTodo, ...updatedTodo } : prevTodo // Ensure you spread prevTodo
  //     )
  //   )
  // }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)) // Fixed typo: 'filter'
  }

  const toggleComplete = (id) => {
    // You would need to define this function if you want to toggle completion status
    setTodos((prev) =>
      prev.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */} 
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App



// import { useState } from 'react'
// import {TodoProvider} from './contexts/index'
// import './App.css'

// function App() {
//   const [todos, setTodos] = useState([])

//   const addTodo = (todo)=>{
//     setTodos((prev)=> [{id: Date.now(), ...todo}, ...prev])
//   }

//   const updateTodo = (id, todo)=>{
//     setTodos((prev)=> prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
//   }

//   const deleteTodo = (id)=>{
//     setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
//   }

//   return (
//     <TodoProvider value={{useTodo, addTodo, updateTodo, deleteTodo, toggleComplete}}>
//       <div className="bg-[#172842] min-h-screen py-8">
//           <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//               <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//               <div className="mb-4">
//                   {/* Todo form goes here */} 
//               </div>
//               <div className="flex flex-wrap gap-y-3">
//                   {/*Loop and Add TodoItem here */}
//               </div>
//           </div>
//       </div>
//     </TodoProvider>
//   )
// }

// export default App
