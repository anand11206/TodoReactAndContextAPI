import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoContextProvider } from './context/TodoContext'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0) setTodos(todos)

  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const addTodo = (todo) => {
    if(todo){
      setTodos([{id:Date.now(), todoMsg:todo, completed: false}, ...todos])
    }
    
  }

  const updateTodo = (id, todo) => {
    setTodos(todos.map((t) => t.id === id ? {...todo} : t))
    console.log(todos)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map((t) => t.id === id ? {...t, completed:!t.completed} : t))

  }
 
  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className='min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 '>
        <div className='bg-pink-50 m-20 flex flex-col w-170 rounded-2xl shadow-2xl p-6 pt-10 items-center justify-center'>
          <div
          className='p-4 text-6xl font-bold text-violet-900'
          >Todo App</div>
          <TodoForm />
        <ul>
          {
          todos.map((todo)=>
            
              <li key={todo.id}>
                <TodoItem todo={todo}/>
              </li>
            
            
          )
        }
        </ul>
        </div>
        
        
      </div>
      
    </TodoContextProvider>
  )
}

export default App



// // ...existing imports...

// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     const todos = JSON.parse(localStorage.getItem("todos"))
//     if(todos && todos.length > 0) setTodos(todos)

//   },[])

//   useEffect(() => {
//     localStorage.setItem("todos",JSON.stringify(todos))
//   },[todos])

//   const addTodo = (todo) => {
//     setTodos([{id:Date.now(), todoMsg:todo, completed: false}, ...todos])
//   }

//   const updateTodo = (id, todo) => {
//     setTodos(todos.map((t) => t.id === id ? {...todo} : t))
//     console.log(todos)
//   }

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((t) => t.id !== id))
//   }

//   const toggleComplete = (id) => {
//     setTodos(todos.map((t) => t.id === id ? {...t, completed:!t.completed} : t))

//   }
  
//   // ...existing code...
//   return (
//     <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
//       <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-200 py-10">
//         <div className="w-full max-w-xl bg-white/80 rounded-2xl shadow-2xl p-8 mt-10">
//           <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8 drop-shadow">🌟 Todo App</h1>
//           <TodoForm />
//           <ul className="mt-8 space-y-4">
//             <AnimatePresence>
//               {todos.map((todo) => (
//                 <motion.li
//                   key={todo.id}
//                   layout
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -30 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                 >
//                   <TodoItem todo={todo} />
//                 </motion.li>
//               ))}
//             </AnimatePresence>
//           </ul>
//         </div>
//       </div>
//     </TodoContextProvider>
//   )
// }
// export default App



// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     const todos = JSON.parse(localStorage.getItem("todos"))
//     if(todos && todos.length > 0) setTodos(todos)

//   },[])

//   useEffect(() => {
//     localStorage.setItem("todos",JSON.stringify(todos))
//   },[todos])

//   const addTodo = (todo) => {
//     setTodos([{id:Date.now(), todoMsg:todo, completed: false}, ...todos])
//   }

//   const updateTodo = (id, todo) => {
//     setTodos(todos.map((t) => t.id === id ? {...todo} : t))
//     console.log(todos)
//   }

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((t) => t.id !== id))
//   }

//   const toggleComplete = (id) => {
//     setTodos(todos.map((t) => t.id === id ? {...t, completed:!t.completed} : t))

//   }
  
//   return (
//     <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
//       <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-200 py-10">
//         <div className="w-full max-w-xl bg-white/80 rounded-2xl shadow-2xl p-8 mt-10">
//           <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8 drop-shadow">🌟 Todo App</h1>
//           <TodoForm />
//           <ul className="mt-8 space-y-4">
//             {todos.map((todo) => (
//               <li key={todo.id}>
//                 <TodoItem todo={todo} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </TodoContextProvider>
//   )
// }
// export default App
